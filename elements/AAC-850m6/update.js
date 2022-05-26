function(instance, properties, context) {
    
    instance.canvas.css({ position: "fixed", top: "-150px", left: "-150px" });
    
    window.addEventListener("load", function(){
        
    	var selector = '#' + properties.element_id;   
        
        if(properties.width != null){ $(selector).css("width", properties.width); }
        if(properties.height != null){ $(selector).css("height", properties.height); }
        if(properties.backgroundColor != null){ $(selector).css("background-color", properties.backgroundColor); }
        if(properties.fontSize != null){ $(selector).css("font-size", properties.fontSize + 'px'); }
        if(properties.fontWeight != null){ $(selector).css("font-weight", properties.fontWeight); }
        if(properties.fontFamily != null){ $(selector).css("font-family", properties.fontFamily); }
        if(properties.fontStyle != null){ $(selector).css("font-style", properties.fontStyle); }
        if(properties.color != null){ $(selector).css("color", properties.color); }
        if(properties.textAlign != null){ $(selector).css("text-align", properties.textAlign); }
        if(properties.textDecoration != null){ $(selector).css("text-decoration", properties.textDecoration); }
        if(properties.textTransform != null){ $(selector).css("text-transform", properties.textTransform); }
        if(properties.lineHeight != null){ $(selector).css("line-height", properties.lineHeight + 'px'); }
        if(properties.paddingLeft != null){ $(selector).css("padding-left", properties.paddingLeft + 'px'); }
        if(properties.paddingRight != null){ $(selector).css("padding-right", properties.paddingRight + 'px'); }
        if(properties.paddingTop != null){ $(selector).css("padding-top", properties.paddingTop + 'px'); }
        if(properties.paddingBottom != null){ $(selector).css("padding-bottom", properties.paddingBottom + 'px'); }
        if(properties.marginLeft != null){ $(selector).css("margin-left", properties.marginLeft + 'px'); }
        if(properties.marginRight != null){ $(selector).css("margin-right", properties.marginRight + 'px'); }
        if(properties.marginTop != null){ $(selector).css("margin-top", properties.marginTop + 'px'); }
        if(properties.marginBottom != null){ $(selector).css("margin-bottom", properties.marginBottom + 'px'); }  
        if(properties.overflowX != null){ $(selector).css("overflow-x", properties.overflowX); }
        if(properties.overflowY != null){ $(selector).css("overflow-y", properties.overflowY); }
        
    });    
    
}