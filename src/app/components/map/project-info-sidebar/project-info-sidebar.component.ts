import { Component, OnInit, Injectable, inject, Inject, Injector, Optional, Directive, ViewChild, ElementRef } from '@angular/core';
//import { DOCUMENT } from '@angular/common';
//import Control from 'ol/control/Control';
import * as ol from 'ol';
import { Control, defaults as defaultControls } from 'ol/control';

@Component({
  selector: 'app-project-info-sidebar',
  templateUrl: './project-info-sidebar.component.html',
  styleUrls: ['./project-info-sidebar.component.scss'],
  //providers: [Control]
})
@Injectable()
export class ProjectInfoSidebarComponent extends Control /*implements OnInit*/ {

  @ViewChild('sidebar') mySidebarDiv: ElementRef;
  //element: HTMLElement;

  _container;
  _tabitems;
  _panes;
  _closeButtons;
  classList;
  _sidebar;

  constructor(@Inject(String)opt_options/*, @Inject(DOCUMENT) document, elementRef: ElementRef*/) {

    var defaults = {
        element: null,
        position: 'left'
    }, i, child;

    var options = Object.assign({}, defaults, opt_options);

    var element = document.getElementById(options.element);
    //var element = this.mySidebarDiv.nativeElement(options.element)

    super({
        element: element,
        target: options.target
    });
    // super((() => {
    //   return {
    //     element: this.mySidebarDiv.nativeElement.querySelector(options.element),
    //     target: options.target
    //   }
    // })());

    // Attach .sidebar-left/right class
    element.classList.add('sidebar-' + options.position);

    // Find sidebar > div.sidebar-content
    for (i = element.children.length - 1; i >= 0; i--) {
        child = element.children[i];
        if (child.tagName === 'DIV' &&
                child.classList.contains('sidebar-content')) {
            this._container = child;
        }
    }

    // Find sidebar ul.sidebar-tabs > li, sidebar .sidebar-tabs > ul > li
    this._tabitems = element.querySelectorAll('ul.sidebar-tabs > li, .sidebar-tabs > ul > li');
    for (i = this._tabitems.length - 1; i >= 0; i--) {
        this._tabitems[i]._sidebar = this;
    }

    // Find sidebar > div.sidebar-content > div.sidebar-pane
    this._panes = [];
    this._closeButtons = [];
    for (i = this._container.children.length - 1; i >= 0; i--) {
        child = this._container.children[i];
        if (child.tagName == 'DIV' &&
                child.classList.contains('sidebar-pane')) {
            this._panes.push(child);

            var closeButtons = child.querySelectorAll('.sidebar-close');
            for (var j = 0, len = closeButtons.length; j < len; j++) {
                this._closeButtons.push(closeButtons[j]);
            }
        }
    }
  }

  initprops(options) {
    var element = this.mySidebarDiv.nativeElement(options.element)
  }
  /**
  * Set the map instance the control is associated with.
  * @param {ol.Map} map The map instance.
  */
  setMap(map) {
      var i, child;

      for (i = this._tabitems.length - 1; i >= 0; i--) {
          child = this._tabitems[i];
          var sub = child.querySelector('a');
          if (sub.hasAttribute('href') && sub.getAttribute('href').slice(0,1) == '#') {
              sub.onclick = this._onClick.bind(child);
          }
      }

      for (i = this._closeButtons.length - 1; i >= 0; i--) {
          child = this._closeButtons[i];
          child.onclick = this._onCloseClick.bind(this);
      }
  };

  open(id) {
      var i, child;

      // hide old active contents and show new content
      for (i = this._panes.length - 1; i >= 0; i--) {
          child = this._panes[i];
          if (child.id == id)
              child.classList.add('active');
          else if (child.classList.contains('active'))
              child.classList.remove('active');
      }

      // remove old active highlights and set new highlight
      for (i = this._tabitems.length - 1; i >= 0; i--) {
          child = this._tabitems[i];
          if (child.querySelector('a').hash == '#' + id)
              child.classList.add('active');
          else if (child.classList.contains('active'))
              child.classList.remove('active');
      }

      // open sidebar (if necessary)
      if (this.element.classList.contains('collapsed')) {
          this.element.classList.remove('collapsed');
      }

      return this;
  };

  close() {
      // remove old active highlights
      for (var i = this._tabitems.length - 1; i >= 0; i--) {
          var child = this._tabitems[i];
          if (child.classList.contains('active'))
              child.classList.remove('active');
      }

      // close sidebar
      if (!this.element.classList.contains('collapsed')) {
          this.element.classList.add('collapsed');
      }

      return this;
  };

  _onClick(evt) {
      evt.preventDefault();
      if (this.classList.contains('active')) {
          this._sidebar.close();
      } else if (!this.classList.contains('disabled')) {
          this._sidebar.open();
      }
  };

  _onCloseClick() {
      this.close();
  };

  ngOnInit(): void {
  }

}

  // Expose Sidebar as ol.control.Sidebar if using a full build of
  // OpenLayers
  // if (window.ol && window.ol.control) {
  //   window.ol.control.Sidebar = ProjectInfoSidebarComponent;
  // }


