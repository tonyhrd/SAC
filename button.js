(function () {
	  let _zoom;
	  let tmpl = document.createElement('template');
	    tmpl.innerHTML = ` 
	    <style>
	        @font-face {
	      	font-family: 'cez_icon'; /*Please replace 'SAP-icons' with your font name which will be used when register in sap.ui.core.IconPool*/
	      	src: url('https://zcezsacwidgets-lrp805absg.dispatcher.eu2.hana.ondemand.com/cez_fonts/cez_icon.ttf') format('truetype');
	      	font-weight: normal;
	      	font-style: normal;
	      	};
	      	
.cez0 .sapMBtnInner  {
  background: white;
  color: #737373;
  font-size: 17px;
  font-family: Arial;
  border-bottom-color: black;
  border-bottom-width: thin;
  height: 157%;
}
.cez0 .sapMBtnInner.sapMBtnText {
    padding-top: 8px;
}     
.cez0 .sapMBtnIcon {
    color: #737373; 
    padding-top: 8px;
    }
.cez0:hover .sapMBtnInner  {
  background: #B8B3AD !important;
  color: #F24F00 !important;
  font-size: 17px;
  font-family: Arial;
  border-color: #F24F00;
  border-width: medium;
}
.cez0:hover .sapMBtnIcon {
    color: #F24F00 !important;
}
.cez1 .sapMBtnInner  {
  background: white;
  color: #737373;
  font-size: 17px;
  font-family: Arial;
  border-color: white;
  border-width: thin;
  height: 157%;
}
.cez1 .sapMBtnInner.sapMBtnText {
    padding-top: 8px;
}  
.cez1 .sapMBtnIcon {
    color: #737373 !important; 
    padding-top: 8px;
    }
.cez1:hover .sapMBtnInner  {
  background: #B8B3AD !important;
  color: #F24F00 !important;
  font-size: 17px;
  font-family: Arial;
  border-bottom-color: #F24F00 !important;
  border-bottom-width: medium !important;
}
.cez1:hover .sapMBtnIcon {
    color: #F24F00 !important;
}
.cez2 .sapMBtnInner  {
  background: white;
  color: #F24F00;
  font-size: 17px;
  font-family: Arial;
  border-color: white;
  border-width: thin;
  border-bottom-color: #F24F00;
  border-bottom-width: medium;
  height: 157%;
}
.cez2 .sapMBtnInner.sapMBtnText {
    padding-top: 8px;
}  
.cez2 .sapMBtnIcon {
    color: #F24F00 !important; 
    padding-top: 8px;
    }
    
.cez2:hover .sapMBtnInner  {
  background: #B8B3AD !important;
  color: #F24F00 !important;
  font-size: 17px;
  font-family: Arial;
  border-bottom-color: #F24F00 !important;
  border-bottom-width: medium !important;
}

.cez2:hover .sapMBtnIcon {
    color: #F24F00 !important;
}

.cez3 .sapMBtnInner  {
  background: white;
  color: #006633;
  font-size: 17px;
  font-family: Arial;
  border-color: #006633;
  margin: 0px;
  height: 157%;
}
.cez3 .sapMBtnInner.sapMBtnText {
    padding-top: 8px;
}  
.cez3 .sapMBtnIcon {
    color: #006633 !important; 
    padding-top: 8px;
    }
}
 .cez3:hover .sapMBtnInner  {
  background: #B8B3AD !important;
  color: #006633 !important;
  font-size: 17px;
  font-family: Arial;
  border-color: #006633;
}
 .cez3:active .sapMBtnInner  {
  background: #B8B3AD !important;
  color: #006633 !important;
  font-size: 17px;
  font-family: Arial;
  border-color: #006633 !important;
}
 .cez3:hover .sapMBtnIcon {
    color: #006633;
}

.cez4 .sapMBtnInner  {
  background: #006633;
  color: white;
  font-size: 17px;
  font-family: Arial;
  border-color: #006633;
  margin: 0px;
  height: 157%;
}
.cez4 .sapMBtnInner.sapMBtnText {
    padding-top: 8px;
}  
.cez4 .sapMBtnIcon {
    color: white !important; 
    padding-top: 8px;
    }
    
.cez4:hover .sapMBtnInner  {
  background: #737373 !important;
  color: white !important;
  font-size: 17px;
  font-family: Arial;
  border-color: #737373;
}
.cez4:active .sapMBtnInner  {
  background: #737373 !important;
  color: white !important;
  font-size: 17px;
  font-family: Arial;
  border-color: #737373 !important;
}
.cez4:hover .sapMBtnIcon {
    color: white !important;
}

.cez5 .sapMBtnInner  {
  background: white;
  color: #737373;
  font-size: 17px;
  font-family: Arial;
  border-color: #737373;
  margin: 0px;
  height: 157%;
}
.cez5 .sapMBtnInner.sapMBtnText {
    padding-top: 8px;
}  
.cez5 .sapMBtnIcon {
    color: #737373 !important; 
    padding-top: 8px;
    }
}
 .cez5:hover .sapMBtnInner  {
  background: #B8B3AD !important;
  color: #737373 !important;
  font-size: 17px;
  font-family: Arial;
  border-color: #737373;
}
 .cez5:active .sapMBtnInner  {
  background: #B8B3AD !important;
  color: #737373 !important;
  font-size: 17px;
  font-family: Arial;
  border-color: #737373 !important;
}
 .cez5:hover .sapMBtnIcon {
    color: #737373;
}

.cez6 .sapMBtnInner  {
  background: #737373;
  color: white;
  font-size: 17px;
  font-family: Arial;
  border-color: #B8B3AD;
  margin: 0px;
  height: 157%;
}
.cez6 .sapMBtnInner.sapMBtnText {
    padding-top: 8px;
}  
.cez6 .sapMBtnIcon {
    color: white !important; 
    padding-top: 8px;
    }
}
 .cez6:hover .sapMBtnInner  {
  background: #B8B3AD !important;
  color: white !important;
  font-size: 17px;
  font-family: Arial;
  border-color: white;
}
 .cez6:active .sapMBtnInner  {
  background: #B8B3AD !important;
  color: white !important;
  font-size: 17px;
  font-family: Arial;
  border-color: white !important;
}
 .cez6:hover .sapMBtnIcon {
    color: white;
}
.cez7 .sapMBtnInner  {
  background: white;
  color: #F24F00;
  font-size: 17px;
  font-family: Arial;
  border-color: #F24F00;
  margin: 0px;
  height: 157%;
}
.cez7 .sapMBtnInner.sapMBtnText {
    padding-top: 8px;
}  
.cez7 .sapMBtnIcon {
    color: #F24F00 !important; 
    padding-top: 8px;
    }
}
 .cez7:hover .sapMBtnInner  {
  background: #737373 !important;
  color: #F24F00 !important;
  font-size: 17px;
  font-family: Arial;
  border-color: #F24F00;
}
 .cez7:active .sapMBtnInner  {
  background: #737373 !important;
  color: #F24F00 !important;
  font-size: 17px;
  font-family: Arial;
  border-color: #F24F00 !important;
}
 .cez7:hover .sapMBtnIcon {
    color: #F24F00;
}

.cez8 .sapMBtnInner  {
  background: #006633;
  color: #F24F00;
  font-size: 17px;
  font-family: Arial;
  border-color: #006633;
  margin: 0px;
  height: 157%;
}
.cez8 .sapMBtnInner.sapMBtnText {
    padding-top: 8px;
}  
.cez8 .sapMBtnIcon {
    color: #F24F00 !important; 
    padding-top: 8px;
    }
}
 .cez8:hover .sapMBtnInner  {
  background: #737373 !important;
  color: #F24F00 !important;
  font-size: 17px;
  font-family: Arial;
  border-color: #F24F00;
}
 .cez8:active .sapMBtnInner  {
  background: #737373 !important;
  color: #F24F00 !important;
  font-size: 17px;
  font-family: Arial;
  border-color: #737373 !important;
}
 .cez8:hover .sapMBtnIcon {
    color: #F24F00;
}
.button50 {
  zoom: 49%;
}
.button60 {
  zoom: 59%;
}
.button70 {
  zoom: 69%;
}
.button80 {
  zoom: 78%;
}
.button90 {
  zoom: 88%;
}
.button100 {
  zoom: 97%;
}
.button110 {
  zoom: 110%;
}
.button120 {
  zoom: 120%;
}
.button130 {
  zoom: 130%;
}
.button140 {
  zoom: 140%;
}
.button150 {
  zoom: 150%;
}
.button160 {
  zoom: 160%;
}
.button170 {
  zoom: 170%;
}
.button180 {
  zoom: 180%;
}
.button190 {
  zoom: 190%;
}
.button200 {
  zoom: 200%;
}	    
	        
	   </style>
    `;
	    
    class Button extends HTMLElement {
        constructor() {
            super();
            this.init();
        }

        init() {
    
            if (this.children.length === 2) return; //constructor called during drag+drop
            if (!this.querySelector("link")) {
                this.appendChild(tmpl.content.cloneNode(true));
                
                if(sap.ui.core.IconPool.fontLoaded('col1')===undefined){
                sap.ui.core.IconPool.addIcon('plyn','col1','cez_icon','e903');
                sap.ui.core.IconPool.addIcon('elektrina','col1','cez_icon','e904');
                sap.ui.core.IconPool.addIcon('balance-inv','col1','cez_icon','e900');
                sap.ui.core.IconPool.addIcon('logo-text-inv','col1','cez_icon','e901');
                sap.ui.core.IconPool.addIcon('gears','col1','cez_icon','e902');
                sap.ui.core.IconPool.addIcon('management-inv','col1','cez_icon','e906');
                sap.ui.core.IconPool.addIcon('manager','col1','cez_icon','e907');
                sap.ui.core.IconPool.addIcon('plate','col1','cez_icon','e908');
                sap.ui.core.IconPool.addIcon('portal-inv','col1','cez_icon','e909');
                sap.ui.core.IconPool.addIcon('rating-inv','col1','cez_icon','e90a');
                sap.ui.core.IconPool.addIcon('structure-inv','col1','cez_icon','e90b');
                sap.ui.core.IconPool.addIcon('survey-inv','col1','cez_icon','e90c');
                sap.ui.core.IconPool.addIcon('home','col1','cez_icon','e905');
                }
            }
     
            _zoom = 50;
            var ctor = sap.m.Button;
            this.DP = new ctor({
                press: function () {
                    this.dispatchEvent(new Event("press"));
                }.bind(this)
            }).addStyleClass("button50");
            
            this.DP.placeAt(this);
        }

		//Fired when the widget is added to the html DOM of the page
		connectedCallback() {
			//console.log("connectedCallback");
		}

		//Fired when the widget is removed from the html DOM of the page (e.g. by hide)
		disconnectedCallback() {
			//console.log("disconnectedCallback");
		}

		//When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {
			//console.log("onCustomWidgetBeforeUpdate");
			this._props = { ...this._props, ...oChangedProperties };
		}
		
		//When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {
			//console.log("onCustomWidgetAfterUpdate");	
		}
		
		onCustomWidgetResize(width, height) {
			//console.log("onCustomWidgetResize");
			//console.log(width);
			//console.log(height);
		}
		
		onSetSize(bSize) {
			//console.log("onSetSize");
			//console.log(bSize);
		}
        
        set zoom(value) {
        	this.DP.removeStyleClass("button"+_zoom);
        	this.DP.addStyleClass("button"+value);
        	_zoom = value;

        }
        
        set type(value) { 
        	if(value!==undefined){
        	if(value==="cez1"){
        		this.DP.setType("Transparent");
        		this.DP.removeStyleClass("cez2");	
        		this.DP.removeStyleClass("cez3");
        		this.DP.removeStyleClass("cez4");
        		this.DP.removeStyleClass("cez5");
        		this.DP.removeStyleClass("cez6");
        		this.DP.removeStyleClass("cez7");
        		this.DP.removeStyleClass("cez8");
        		this.DP.addStyleClass("cez1");
        	}
        	else if(value==="cez2"){
        		this.DP.setType("Transparent");
        		this.DP.removeStyleClass("cez1");	
        		this.DP.removeStyleClass("cez3");
        		this.DP.removeStyleClass("cez4");
        		this.DP.removeStyleClass("cez5");
        		this.DP.removeStyleClass("cez6");
        		this.DP.removeStyleClass("cez7");
        		this.DP.removeStyleClass("cez8");
        		this.DP.addStyleClass("cez2");	
        	}
        	else if(value==="cez3"){
        		this.DP.setType("Transparent");
        		this.DP.removeStyleClass("cez1");	
        		this.DP.removeStyleClass("cez2");
        		this.DP.removeStyleClass("cez4");
        		this.DP.removeStyleClass("cez5");
        		this.DP.removeStyleClass("cez6");
        		this.DP.removeStyleClass("cez7");
        		this.DP.removeStyleClass("cez8");
        		this.DP.addStyleClass("cez3");
        	}
        	else if(value==="cez4"){
        		this.DP.setType("Transparent");
        		this.DP.removeStyleClass("cez1");	
        		this.DP.removeStyleClass("cez2");
        		this.DP.removeStyleClass("cez3");
        		this.DP.removeStyleClass("cez5");
        		this.DP.removeStyleClass("cez6");
        		this.DP.removeStyleClass("cez7");
        		this.DP.removeStyleClass("cez8");
        		this.DP.addStyleClass("cez4");
        	}
        	else if(value==="cez5"){
        		this.DP.setType("Transparent");
        		this.DP.removeStyleClass("cez1");	
        		this.DP.removeStyleClass("cez2");
        		this.DP.removeStyleClass("cez3");
        		this.DP.removeStyleClass("cez4");
        		this.DP.removeStyleClass("cez6");
        		this.DP.removeStyleClass("cez7");
        		this.DP.removeStyleClass("cez8");
        		this.DP.addStyleClass("cez5");
        	}
        	else if(value==="cez6"){
        		this.DP.setType("Transparent");
        		this.DP.removeStyleClass("cez1");	
        		this.DP.removeStyleClass("cez2");
        		this.DP.removeStyleClass("cez3");
        		this.DP.removeStyleClass("cez4");
        		this.DP.removeStyleClass("cez5");
        		this.DP.removeStyleClass("cez7");
        		this.DP.removeStyleClass("cez8");
        		this.DP.addStyleClass("cez6");
        	}
        	else if(value==="cez7"){
        		this.DP.setType("Transparent");
        		this.DP.removeStyleClass("cez1");	
        		this.DP.removeStyleClass("cez2");
        		this.DP.removeStyleClass("cez3");
        		this.DP.removeStyleClass("cez4");
        		this.DP.removeStyleClass("cez5");
        		this.DP.removeStyleClass("cez6");
        		this.DP.removeStyleClass("cez8");
        		this.DP.addStyleClass("cez7");
        	}
        	else if(value==="cez8"){
        		this.DP.setType("Transparent");
        		this.DP.removeStyleClass("cez1");	
        		this.DP.removeStyleClass("cez2");
        		this.DP.removeStyleClass("cez3");
        		this.DP.removeStyleClass("cez4");
        		this.DP.removeStyleClass("cez5");
        		this.DP.removeStyleClass("cez6");
        		this.DP.removeStyleClass("cez7");
        		this.DP.addStyleClass("cez8");
        	}
        	else{
        		this.DP.removeStyleClass("cez1");	
        		this.DP.removeStyleClass("cez2");
        		this.DP.removeStyleClass("cez3");
        		this.DP.removeStyleClass("cez4");
        		this.DP.removeStyleClass("cez5");
        		this.DP.removeStyleClass("cez6");
        		this.DP.removeStyleClass("cez7");
        	this.DP.setType(value); } }
        }

        set text(value) { 
            this.DP.setText(value); 
        }
        
        set activeIcon(value) { 
        	if(value!==undefined)
        	{this.DP.setActiveIcon(value);}
        }
        
        set enabled(value) { 
        	if(value!=="")
        	{this.DP.setEnabled(value);}
        }
        
        set icon(value) { 
        	if(value!==undefined)
        	{this.DP.setIcon(value);}
        }
        
        set iconFirst(value) { 
        	if(value!=="")
        	{this.DP.setIconFirst(value);}
        }
        
        set width(value) { 
        	if(value!=="")
        	{this.DP.setWidth(value + 'px');}
        }
        
        set fontsize(value) { 
        	
        	
        }
        
        set textDirection(value) { 
        	if(value!==undefined)
        	{this.DP.setTextDirection(value);}
        }
        
        set tooltip(value) { 
        	if(value!=="")
        	{this.DP.setTooltip(value);}
        }        
    }

    customElements.define('ahrdlicka-button', Button);
})();
