import { Component, OnInit, Injectable, inject, Inject, Optional } from '@angular/core';
//import Control from 'ol/control/Control';
import * as ol from 'ol';
import { Control, defaults as defaultControls } from 'ol/control';

@Component({
  selector: 'app-project-info-sidebar',
  templateUrl: './project-info-sidebar.component.html',
  styleUrls: ['./project-info-sidebar.component.scss'],
  providers: [Control]
})
export class ProjectInfoSidebarComponent /*extends Control*/ implements OnInit {

  public defaultOLControl = Control;

  public RotateNorthControl = /*@__PURE__*/(function (Control) {
    function RotateNorthControl(opt_options) {
      var options = opt_options || {};

      var button = document.createElement('button');
      button.innerHTML = 'N';

      var element = document.createElement('div');
      element.className = 'rotate-north ol-unselectable ol-control';
      element.appendChild(button);

      Control.call(this, {
        element: element,
        target: options.target,
      });

      button.addEventListener('click', this.handleRotateNorth.bind(this), false);
    }

    if ( Control ) RotateNorthControl.__proto__ = Control;
    RotateNorthControl.prototype = Object.create( Control && Control.prototype );
    RotateNorthControl.prototype.constructor = RotateNorthControl;

    // let ol_ext_inherits = function(RotateNorthControl, Control) {
    //   RotateNorthControl.prototype = Object.create(Control.prototype);
    //   RotateNorthControl.prototype.constructor = RotateNorthControl;
    // };
    // this.ol_ext_inherits();

    RotateNorthControl.prototype.handleRotateNorth = function handleRotateNorth () {
      this.getMap().getView().setRotation(0);
    };

    return RotateNorthControl;

  }(Control));

  constructor(private control: Control) {
    //super(control);
    //this.RotateNorthControl = this.control
  }

  ngOnInit(): void {
    //this.sidebarControl
  }



}
