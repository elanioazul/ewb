import { Component, OnInit } from '@angular/core';
//import Control from 'ol/control/Control';
import {Control, defaults as defaultControls} from 'ol/control';

@Component({
  selector: 'app-project-info-sidebar',
  templateUrl: './project-info-sidebar.component.html',
  styleUrls: ['./project-info-sidebar.component.scss']
})
export class ProjectInfoSidebarComponent implements OnInit {

  public sidebarControl = /*@__PURE__*/(function (Control) {
    function sidebarControl(settings) {
      var defaults = {
        element: null,
        position: 'left'
      }, i, child;

      this._options = Object.assign({}, defaults, settings);

      Control.call(this, {
        element: document.getElementById(this._options.element),
        target: this._options.target
      });

      // Attach .sidebar-left/right class
      this.element.classList.add('sidebar-' + this._options.position);

      // Find sidebar > div.sidebar-content
      for (i = this.element.children.length - 1; i >= 0; i--) {
        child = this.element.children[i];
        if (child.tagName === 'DIV' &&
          child.classList.contains('sidebar-content')) {
          this._container = child;
        }
      }

      // Find sidebar ul.sidebar-tabs > li, sidebar .sidebar-tabs > ul > li
      this._tabitems = this.element.querySelectorAll('ul.sidebar-tabs > li, .sidebar-tabs > ul > li');
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

    if ( Control ) sidebarControl.__proto__ = Control;
    sidebarControl.prototype = Object.create( Control && Control.prototype );
    sidebarControl.prototype.constructor = sidebarControl;

    sidebarControl.prototype.handleRotateNorth = function handleRotateNorth () {
      this.getMap().getView().setRotation(0);
    };

    return sidebarControl;

  }(Control));

  //public sidebar = new Control.Sidebar({ element: 'sidebar', position: 'left' });

  constructor() {}

  ngOnInit(): void {
  }

}
