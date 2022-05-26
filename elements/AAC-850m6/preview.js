function(instance, properties) {
    
    var image = '<img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1653520237555x881506367973588200%2FCSS%2520%25282%2529.png?w=128&h=128&auto=compress&fit=max" style="width: 100%;">';

    instance.canvas.append(image);
    
    instance.canvas.css({"background-color": "#ececec", "padding": "2px", "border": "0px solid #ccc", "overflow": "hidden", "text-align":"center", "width":"50px", "height":"50px"});

}