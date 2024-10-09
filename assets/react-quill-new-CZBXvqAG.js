import{a as s,r as C}from"./react-GnO0LmOb.js";import{i as d}from"./lodash-Cb79gt0C.js";import{Q as m}from"./quill-Ilw8WjZi.js";class l extends s.Component{constructor(t){super(t),this.editingAreaRef=C.createRef(),this.dirtyProps=["modules","formats","bounds","theme","children"],this.cleanProps=["id","className","style","placeholder","tabIndex","onChange","onChangeSelection","onFocus","onBlur","onKeyPress","onKeyDown","onKeyUp"],this.state={generation:0},this.selection=null,this.onEditorChange=(i,n,o,h)=>{var r,a;i==="text-change"?(r=this.onEditorChangeText)==null||r.call(this,this.editor.root.innerHTML,n,h,this.unprivilegedEditor):i==="selection-change"&&((a=this.onEditorChangeSelection)==null||a.call(this,n,h,this.unprivilegedEditor))};const e=this.isControlled()?t.value:t.defaultValue;this.value=e??""}validateProps(t){if(s.Children.count(t.children)>1)throw new Error("The Quill editing area can only be composed of a single React element.");if(s.Children.count(t.children)){const e=s.Children.only(t.children);if((e==null?void 0:e.type)==="textarea")throw new Error("Quill does not support editing on a <textarea>. Use a <div> instead.")}if(this.lastDeltaChangeSet&&t.value===this.lastDeltaChangeSet)throw new Error("You are passing the `delta` object from the `onChange` event back as `value`. You most probably want `editor.getContents()` instead. See: https://github.com/zenoamaro/react-quill#using-deltas")}shouldComponentUpdate(t,e){if(this.validateProps(t),!this.editor||this.state.generation!==e.generation)return!0;if("value"in t){const i=this.getEditorContents(),n=t.value??"";this.isEqualValue(n,i)||this.setEditorContents(this.editor,n)}return t.readOnly!==this.props.readOnly&&this.setEditorReadOnly(this.editor,t.readOnly),[...this.cleanProps,...this.dirtyProps].some(i=>!d(t[i],this.props[i]))}shouldComponentRegenerate(t){return this.dirtyProps.some(e=>!d(t[e],this.props[e]))}componentDidMount(){this.instantiateEditor(),this.setEditorContents(this.editor,this.getEditorContents())}componentWillUnmount(){this.destroyEditor()}componentDidUpdate(t,e){if(this.editor&&this.shouldComponentRegenerate(t)){const i=this.editor.getContents(),n=this.editor.getSelection();this.regenerationSnapshot={delta:i,selection:n},this.setState({generation:this.state.generation+1}),this.destroyEditor()}if(this.state.generation!==e.generation){const{delta:i,selection:n}=this.regenerationSnapshot;delete this.regenerationSnapshot,this.instantiateEditor();const o=this.editor;o.setContents(i),f(()=>this.setEditorSelection(o,n))}}instantiateEditor(){this.editor?this.hookEditor(this.editor):this.editor=this.createEditor(this.getEditingArea(),this.getEditorConfig())}destroyEditor(){this.editor&&this.unhookEditor(this.editor)}isControlled(){return"value"in this.props}getEditorConfig(){return{bounds:this.props.bounds,formats:this.props.formats,modules:this.props.modules,placeholder:this.props.placeholder,readOnly:this.props.readOnly,tabIndex:this.props.tabIndex,theme:this.props.theme}}getEditor(){if(!this.editor)throw new Error("Accessing non-instantiated editor");return this.editor}createEditor(t,e){const i=new m(t,e);return e.tabIndex!=null&&this.setEditorTabIndex(i,e.tabIndex),this.hookEditor(i),i}hookEditor(t){this.unprivilegedEditor=this.makeUnprivilegedEditor(t),t.on("editor-change",this.onEditorChange)}unhookEditor(t){t.off("editor-change",this.onEditorChange)}getEditorContents(){return this.value}getEditorSelection(){return this.selection}isDelta(t){return t&&t.ops}isEqualValue(t,e){return this.isDelta(t)&&this.isDelta(e)?d(t.ops,e.ops):d(t,e)}setEditorContents(t,e){this.value=e;const i=this.getEditorSelection();typeof e=="string"?t.setContents(t.clipboard.convert({html:e})):t.setContents(e),f(()=>this.setEditorSelection(t,i))}setEditorSelection(t,e){if(this.selection=e,e){const i=t.getLength();e.index=Math.max(0,Math.min(e.index,i-1)),e.length=Math.max(0,Math.min(e.length,i-1-e.index)),t.setSelection(e)}}setEditorTabIndex(t,e){var i;(i=t==null?void 0:t.scroll)!=null&&i.domNode&&(t.scroll.domNode.tabIndex=e)}setEditorReadOnly(t,e){e?t.disable():t.enable()}makeUnprivilegedEditor(t){const e=t;return{getHTML:()=>e.root.innerHTML,getSemanticHTML:e.getSemanticHTML.bind(e),getLength:e.getLength.bind(e),getText:e.getText.bind(e),getContents:e.getContents.bind(e),getSelection:e.getSelection.bind(e),getBounds:e.getBounds.bind(e)}}getEditingArea(){const t=this.editingAreaRef.current;if(!t)throw new Error("Cannot find element for editing area");if(t.nodeType===3)throw new Error("Editing area cannot be a text node");return t}renderEditingArea(){const{children:t,preserveWhitespace:e}=this.props,{generation:i}=this.state,n={key:i,ref:this.editingAreaRef};return s.Children.count(t)?s.cloneElement(s.Children.only(t),n):e?s.createElement("pre",{...n}):s.createElement("div",{...n})}render(){return s.createElement("div",{id:this.props.id,style:this.props.style,key:this.state.generation,className:`quill ${this.props.className??""}`,onKeyPress:this.props.onKeyPress,onKeyDown:this.props.onKeyDown,onKeyUp:this.props.onKeyUp},this.renderEditingArea())}onEditorChangeText(t,e,i,n){var h,r;if(!this.editor)return;const o=this.isDelta(this.value)?n.getContents():n.getHTML();o!==this.getEditorContents()&&(this.lastDeltaChangeSet=e,this.value=o,(r=(h=this.props).onChange)==null||r.call(h,t,e,i,n))}onEditorChangeSelection(t,e,i){var r,a,u,g,p,E;if(!this.editor)return;const n=this.getEditorSelection(),o=!n&&t,h=n&&!t;d(t,n)||(this.selection=t,(a=(r=this.props).onChangeSelection)==null||a.call(r,t,e,i),o?(g=(u=this.props).onFocus)==null||g.call(u,t,e,i):h&&((E=(p=this.props).onBlur)==null||E.call(p,n,e,i)))}focus(){this.editor&&this.editor.focus()}blur(){this.editor&&(this.selection=null,this.editor.blur())}}l.displayName="React Quill";l.Quill=m;l.defaultProps={theme:"snow",modules:{},readOnly:!1};function f(c){Promise.resolve().then(c)}export{l as R};
