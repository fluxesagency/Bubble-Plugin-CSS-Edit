function(instance, properties, context) {
    
    instance.canvas.css({ position: "fixed", top: "-150px", left: "-150px" });
    
    window.addEventListener("load", function(){
        
    	var selector = '#' + properties.element_id;   
        
        if(properties.width != null){ $(selector).css("width", properties.width); }
        if(properties.height != null){ $(selector).css("height", properties.height); }
        if(properties.backgroundColor != null){ $(selector).css("background-color", properties.backgroundColor); }
        if(properties.fontSize != null){ $(selector).css("font-size", properties.fontSize); }
        if(properties.fontWeight != null){ $(selector).css("font-weight", properties.fontWeight); }
        if(properties.fontFamily != null){ $(selector).css("font-family", properties.fontFamily); }
        if(properties.fontStyle != null){ $(selector).css("font-style", properties.fontStyle); }
        if(properties.color != null){ $(selector).css("color", properties.color); }
        if(properties.textAlign != null){ $(selector).css("text-align", properties.textAlign); }
        if(properties.textDecoration != null){ $(selector).css("text-decoration", properties.textDecoration); }
        if(properties.textTransform != null){ $(selector).css("text-transform", properties.textTransform); }
        if(properties.lineHeight != null){ $(selector).css("line-height", properties.lineHeight); }
        
        
    });    
    
}