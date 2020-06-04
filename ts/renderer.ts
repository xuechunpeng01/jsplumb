import {Segment} from "./connector/abstract-segment";
import {Component, RepaintOptions} from "./component/component";
import {EndpointRepresentation} from "./endpoint/endpoints";
import {PointArray, TypeDescriptor} from "./core";
import {Overlay} from "./overlay/overlay";
import {LabelOverlay} from "./overlay/label-overlay";
import {AbstractConnector} from "./connector/abstract-connector";
import {PaintStyle} from "./styles";
import {OverlayCapableComponent} from "./component/overlay-capable-component";

export interface Renderer {

    getPath(segment:Segment, isFirstSegment:boolean):string;

    repaint(component:Component, typeDescriptor:string, options?:RepaintOptions):void;

    paintOverlay(o: Overlay, params:any, extents:any):void;
    addOverlayClass(o:Overlay, clazz:string):void;
    removeOverlayClass(o:Overlay, clazz:string):void;
    setOverlayVisible(o: Overlay, visible:boolean):void;
    destroyOverlay(o: Overlay, force?:boolean):void;
    updateLabel(o:LabelOverlay):void;
    drawOverlay(overlay:Overlay, component:any, paintStyle:PaintStyle, absolutePosition?:PointArray):any;
    moveOverlayParent(o:Overlay, newParent:any):void;
    reattachOverlay(o:Overlay, c:OverlayCapableComponent):any;
    setOverlayHover(o:Overlay, hover:boolean):any;

    setHover(component:Component, hover:boolean):void;

    paintConnector(connector:AbstractConnector, paintStyle:PaintStyle, extents?:any):void;
    destroyConnector(connector:AbstractConnector, force?:boolean):void;
    setConnectorHover(connector:AbstractConnector, h:boolean, doNotCascade?:boolean):void;
    addConnectorClass(connector:AbstractConnector, clazz:string):void;
    removeConnectorClass(connector:AbstractConnector, clazz:string):void;
    getConnectorClass(connector:AbstractConnector):string;
    setConnectorVisible(connector:AbstractConnector, v:boolean):void;
    applyConnectorType(connector:AbstractConnector, t:TypeDescriptor):void;

    applyEndpointType<C>(ep:EndpointRepresentation<C>, t:TypeDescriptor):void;
    setEndpointVisible<C>(ep:EndpointRepresentation<C>, v:boolean):void;
    destroyEndpoint<C>(ep:EndpointRepresentation<C>):void;
    paintEndpoint<C>(ep:EndpointRepresentation<C>, paintStyle:PaintStyle):void;
    addEndpointClass<C>(ep:EndpointRepresentation<C>, c:string):void;
    removeEndpointClass<C>(ep:EndpointRepresentation<C>, c:string):void;
    getEndpointClass<C>(ep:EndpointRepresentation<C>):string;
    setEndpointHover<C>(endpoint: EndpointRepresentation<C>, h: boolean, doNotCascade?:boolean): void;

}
