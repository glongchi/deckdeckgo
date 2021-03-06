/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ContentAlign, ContentList, FontSize, ToolbarActions, } from "./types/enums";
import { DeckdeckgoPalette, } from "@deckdeckgo/color";
import { EventEmitter, } from "@stencil/core";
import { AnchorLink, InlineAction, } from "./interfaces/interfaces";
export namespace Components {
    interface DeckgoIeActionButton {
        "cssClass": string;
        "disableAction": boolean;
        "mobile": boolean;
    }
    interface DeckgoIeActionImage {
        "cssClass": string;
    }
    interface DeckgoIeAlignActions {
        "anchorEvent": MouseEvent | TouchEvent;
        "containers": string;
        "contentAlign": ContentAlign;
        "mobile": boolean;
        "sticky": boolean;
    }
    interface DeckgoIeColorActions {
        "color": string;
        "mobile": boolean;
        "palette": DeckdeckgoPalette[];
        "selection": Selection;
    }
    interface DeckgoIeFontSizeActions {
        "fontSize": FontSize;
        "mobile": boolean;
        "sticky": boolean;
    }
    interface DeckgoIeImageActions {
        "anchorEvent": MouseEvent | TouchEvent;
        "containers": string;
        "imgAnchor": string;
        "imgDidChange": EventEmitter<HTMLElement>;
        "imgPropertyCssFloat": string;
        "imgPropertyWidth": string;
        "mobile": boolean;
    }
    interface DeckgoIeLinkActions {
        "anchorLink": AnchorLink;
        "linkCreated": EventEmitter<HTMLElement>;
        "mobile": boolean;
        "selection": Selection;
        "toolbarActions": ToolbarActions;
    }
    interface DeckgoIeListActions {
        "contentList": ContentList;
        "disabledTitle": boolean;
        "mobile": boolean;
        "selection": Selection;
        "sticky": boolean;
    }
    interface DeckgoIeSeparator {
        "mobile": boolean;
    }
    interface DeckgoIeStyleActions {
        "bold": boolean;
        "disabledTitle": boolean;
        "italic": boolean;
        "mobile": boolean;
        "selection": Selection;
        "underline": boolean;
    }
    interface DeckgoIeTriangle {
        "mobile": boolean;
    }
    interface DeckgoInlineEditor {
        "align": boolean;
        "attachTo": HTMLElement;
        "containers": string;
        "customActions": string;
        "fontSize": boolean;
        "imgAnchor": string;
        "imgEditable": boolean;
        "imgPropertyCssFloat": string;
        "imgPropertyWidth": string;
        "list": boolean;
        "mobile": boolean;
        "palette": DeckdeckgoPalette[];
        "reset": (clearSelection: boolean, blurActiveElement?: boolean) => Promise<void>;
        "stickyDesktop": boolean;
        "stickyMobile": boolean;
    }
}
declare global {
    interface HTMLDeckgoIeActionButtonElement extends Components.DeckgoIeActionButton, HTMLStencilElement {
    }
    var HTMLDeckgoIeActionButtonElement: {
        prototype: HTMLDeckgoIeActionButtonElement;
        new (): HTMLDeckgoIeActionButtonElement;
    };
    interface HTMLDeckgoIeActionImageElement extends Components.DeckgoIeActionImage, HTMLStencilElement {
    }
    var HTMLDeckgoIeActionImageElement: {
        prototype: HTMLDeckgoIeActionImageElement;
        new (): HTMLDeckgoIeActionImageElement;
    };
    interface HTMLDeckgoIeAlignActionsElement extends Components.DeckgoIeAlignActions, HTMLStencilElement {
    }
    var HTMLDeckgoIeAlignActionsElement: {
        prototype: HTMLDeckgoIeAlignActionsElement;
        new (): HTMLDeckgoIeAlignActionsElement;
    };
    interface HTMLDeckgoIeColorActionsElement extends Components.DeckgoIeColorActions, HTMLStencilElement {
    }
    var HTMLDeckgoIeColorActionsElement: {
        prototype: HTMLDeckgoIeColorActionsElement;
        new (): HTMLDeckgoIeColorActionsElement;
    };
    interface HTMLDeckgoIeFontSizeActionsElement extends Components.DeckgoIeFontSizeActions, HTMLStencilElement {
    }
    var HTMLDeckgoIeFontSizeActionsElement: {
        prototype: HTMLDeckgoIeFontSizeActionsElement;
        new (): HTMLDeckgoIeFontSizeActionsElement;
    };
    interface HTMLDeckgoIeImageActionsElement extends Components.DeckgoIeImageActions, HTMLStencilElement {
    }
    var HTMLDeckgoIeImageActionsElement: {
        prototype: HTMLDeckgoIeImageActionsElement;
        new (): HTMLDeckgoIeImageActionsElement;
    };
    interface HTMLDeckgoIeLinkActionsElement extends Components.DeckgoIeLinkActions, HTMLStencilElement {
    }
    var HTMLDeckgoIeLinkActionsElement: {
        prototype: HTMLDeckgoIeLinkActionsElement;
        new (): HTMLDeckgoIeLinkActionsElement;
    };
    interface HTMLDeckgoIeListActionsElement extends Components.DeckgoIeListActions, HTMLStencilElement {
    }
    var HTMLDeckgoIeListActionsElement: {
        prototype: HTMLDeckgoIeListActionsElement;
        new (): HTMLDeckgoIeListActionsElement;
    };
    interface HTMLDeckgoIeSeparatorElement extends Components.DeckgoIeSeparator, HTMLStencilElement {
    }
    var HTMLDeckgoIeSeparatorElement: {
        prototype: HTMLDeckgoIeSeparatorElement;
        new (): HTMLDeckgoIeSeparatorElement;
    };
    interface HTMLDeckgoIeStyleActionsElement extends Components.DeckgoIeStyleActions, HTMLStencilElement {
    }
    var HTMLDeckgoIeStyleActionsElement: {
        prototype: HTMLDeckgoIeStyleActionsElement;
        new (): HTMLDeckgoIeStyleActionsElement;
    };
    interface HTMLDeckgoIeTriangleElement extends Components.DeckgoIeTriangle, HTMLStencilElement {
    }
    var HTMLDeckgoIeTriangleElement: {
        prototype: HTMLDeckgoIeTriangleElement;
        new (): HTMLDeckgoIeTriangleElement;
    };
    interface HTMLDeckgoInlineEditorElement extends Components.DeckgoInlineEditor, HTMLStencilElement {
    }
    var HTMLDeckgoInlineEditorElement: {
        prototype: HTMLDeckgoInlineEditorElement;
        new (): HTMLDeckgoInlineEditorElement;
    };
    interface HTMLElementTagNameMap {
        "deckgo-ie-action-button": HTMLDeckgoIeActionButtonElement;
        "deckgo-ie-action-image": HTMLDeckgoIeActionImageElement;
        "deckgo-ie-align-actions": HTMLDeckgoIeAlignActionsElement;
        "deckgo-ie-color-actions": HTMLDeckgoIeColorActionsElement;
        "deckgo-ie-font-size-actions": HTMLDeckgoIeFontSizeActionsElement;
        "deckgo-ie-image-actions": HTMLDeckgoIeImageActionsElement;
        "deckgo-ie-link-actions": HTMLDeckgoIeLinkActionsElement;
        "deckgo-ie-list-actions": HTMLDeckgoIeListActionsElement;
        "deckgo-ie-separator": HTMLDeckgoIeSeparatorElement;
        "deckgo-ie-style-actions": HTMLDeckgoIeStyleActionsElement;
        "deckgo-ie-triangle": HTMLDeckgoIeTriangleElement;
        "deckgo-inline-editor": HTMLDeckgoInlineEditorElement;
    }
}
declare namespace LocalJSX {
    interface DeckgoIeActionButton {
        "cssClass"?: string;
        "disableAction"?: boolean;
        "mobile"?: boolean;
        "onAction"?: (event: CustomEvent<UIEvent>) => void;
    }
    interface DeckgoIeActionImage {
        "cssClass"?: string;
    }
    interface DeckgoIeAlignActions {
        "anchorEvent"?: MouseEvent | TouchEvent;
        "containers"?: string;
        "contentAlign"?: ContentAlign;
        "mobile"?: boolean;
        "onAlignModified"?: (event: CustomEvent<any>) => void;
        "sticky"?: boolean;
    }
    interface DeckgoIeColorActions {
        "color"?: string;
        "mobile"?: boolean;
        "onColorModified"?: (event: CustomEvent<void>) => void;
        "palette"?: DeckdeckgoPalette[];
        "selection"?: Selection;
    }
    interface DeckgoIeFontSizeActions {
        "fontSize"?: FontSize;
        "mobile"?: boolean;
        "onFontSizeModified"?: (event: CustomEvent<void>) => void;
        "sticky"?: boolean;
    }
    interface DeckgoIeImageActions {
        "anchorEvent"?: MouseEvent | TouchEvent;
        "containers"?: string;
        "imgAnchor"?: string;
        "imgDidChange"?: EventEmitter<HTMLElement>;
        "imgPropertyCssFloat"?: string;
        "imgPropertyWidth"?: string;
        "mobile"?: boolean;
        "onImgModified"?: (event: CustomEvent<void>) => void;
    }
    interface DeckgoIeLinkActions {
        "anchorLink"?: AnchorLink;
        "linkCreated"?: EventEmitter<HTMLElement>;
        "mobile"?: boolean;
        "onLinkModified"?: (event: CustomEvent<boolean>) => void;
        "selection"?: Selection;
        "toolbarActions"?: ToolbarActions;
    }
    interface DeckgoIeListActions {
        "contentList"?: ContentList;
        "disabledTitle"?: boolean;
        "mobile"?: boolean;
        "onListModified"?: (event: CustomEvent<void>) => void;
        "selection"?: Selection;
        "sticky"?: boolean;
    }
    interface DeckgoIeSeparator {
        "mobile"?: boolean;
    }
    interface DeckgoIeStyleActions {
        "bold"?: boolean;
        "disabledTitle"?: boolean;
        "italic"?: boolean;
        "mobile"?: boolean;
        "onInitStyle"?: (event: CustomEvent<any>) => void;
        "selection"?: Selection;
        "underline"?: boolean;
    }
    interface DeckgoIeTriangle {
        "mobile"?: boolean;
    }
    interface DeckgoInlineEditor {
        "align"?: boolean;
        "attachTo"?: HTMLElement;
        "containers"?: string;
        "customActions"?: string;
        "fontSize"?: boolean;
        "imgAnchor"?: string;
        "imgEditable"?: boolean;
        "imgPropertyCssFloat"?: string;
        "imgPropertyWidth"?: string;
        "list"?: boolean;
        "mobile"?: boolean;
        "onCustomAction"?: (event: CustomEvent<InlineAction>) => void;
        "onImgDidChange"?: (event: CustomEvent<HTMLElement>) => void;
        "onLinkCreated"?: (event: CustomEvent<HTMLElement>) => void;
        "onStickyToolbarActivated"?: (event: CustomEvent<boolean>) => void;
        "palette"?: DeckdeckgoPalette[];
        "stickyDesktop"?: boolean;
        "stickyMobile"?: boolean;
    }
    interface IntrinsicElements {
        "deckgo-ie-action-button": DeckgoIeActionButton;
        "deckgo-ie-action-image": DeckgoIeActionImage;
        "deckgo-ie-align-actions": DeckgoIeAlignActions;
        "deckgo-ie-color-actions": DeckgoIeColorActions;
        "deckgo-ie-font-size-actions": DeckgoIeFontSizeActions;
        "deckgo-ie-image-actions": DeckgoIeImageActions;
        "deckgo-ie-link-actions": DeckgoIeLinkActions;
        "deckgo-ie-list-actions": DeckgoIeListActions;
        "deckgo-ie-separator": DeckgoIeSeparator;
        "deckgo-ie-style-actions": DeckgoIeStyleActions;
        "deckgo-ie-triangle": DeckgoIeTriangle;
        "deckgo-inline-editor": DeckgoInlineEditor;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "deckgo-ie-action-button": LocalJSX.DeckgoIeActionButton & JSXBase.HTMLAttributes<HTMLDeckgoIeActionButtonElement>;
            "deckgo-ie-action-image": LocalJSX.DeckgoIeActionImage & JSXBase.HTMLAttributes<HTMLDeckgoIeActionImageElement>;
            "deckgo-ie-align-actions": LocalJSX.DeckgoIeAlignActions & JSXBase.HTMLAttributes<HTMLDeckgoIeAlignActionsElement>;
            "deckgo-ie-color-actions": LocalJSX.DeckgoIeColorActions & JSXBase.HTMLAttributes<HTMLDeckgoIeColorActionsElement>;
            "deckgo-ie-font-size-actions": LocalJSX.DeckgoIeFontSizeActions & JSXBase.HTMLAttributes<HTMLDeckgoIeFontSizeActionsElement>;
            "deckgo-ie-image-actions": LocalJSX.DeckgoIeImageActions & JSXBase.HTMLAttributes<HTMLDeckgoIeImageActionsElement>;
            "deckgo-ie-link-actions": LocalJSX.DeckgoIeLinkActions & JSXBase.HTMLAttributes<HTMLDeckgoIeLinkActionsElement>;
            "deckgo-ie-list-actions": LocalJSX.DeckgoIeListActions & JSXBase.HTMLAttributes<HTMLDeckgoIeListActionsElement>;
            "deckgo-ie-separator": LocalJSX.DeckgoIeSeparator & JSXBase.HTMLAttributes<HTMLDeckgoIeSeparatorElement>;
            "deckgo-ie-style-actions": LocalJSX.DeckgoIeStyleActions & JSXBase.HTMLAttributes<HTMLDeckgoIeStyleActionsElement>;
            "deckgo-ie-triangle": LocalJSX.DeckgoIeTriangle & JSXBase.HTMLAttributes<HTMLDeckgoIeTriangleElement>;
            "deckgo-inline-editor": LocalJSX.DeckgoInlineEditor & JSXBase.HTMLAttributes<HTMLDeckgoInlineEditorElement>;
        }
    }
}
