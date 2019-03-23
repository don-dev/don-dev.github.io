//Donal Start

var svg = {
    debug:true,
    init: function(){
        if (this.debug) {
            console.log('svg.init()');
        }
        //bind menu
       	svg.menu();
    },
    menu: function() {
    	if (this.debug) {
    		console.log('svg.menu')
    	}
    	var McButton = $("[data=hamburger-menu]");
		var McBar1 = McButton.find("b:nth-child(1)");
		var McBar2 = McButton.find("b:nth-child(2)");
		var McBar3 = McButton.find("b:nth-child(3)");

		McButton.click(function() {
		  $(this).toggleClass("active");
		  $('.swing-nav-container').toggleClass("active");

		  if (McButton.hasClass("active")) {
		    McBar1.velocity({
		      top: "50%"
		    }, {
		      duration: 200,
		      easing: "swing"
		    });
		    McBar3.velocity({
		        top: "50%"
		      }, {
		        duration: 200,
		        easing: "swing"
		      })
		      .velocity({
		        rotateZ: "90deg"
		      }, {
		        duration: 800,
		        delay: 200,
		        easing: [500, 20]
		      });
		    McButton.velocity({
		      rotateZ: "135deg"
		    }, {
		      duration: 800,
		      delay: 200,
		      easing: [500, 20]
		    });
		  } else {
		    McButton.velocity("reverse");
		    McBar3.velocity({
		        rotateZ: "0deg"
		      }, {
		        duration: 800,
		        easing: [500, 20]
		      })
		      .velocity({
		        top: "100%"
		      }, {
		        duration: 200,
		        easing: "swing"
		      });
		    McBar1.velocity("reverse", {
		      delay: 800
		    });
		  }
		});

		/*$element.velocity({ 
		    width: "500px",
		    property2: value2
		}, {
		    duration: 400,
		    easing: "swing",
		    queue: "",
		    begin: undefined,
		    progress: undefined,
		    complete: undefined,
		    display: undefined,
		    visibility: undefined,
		    loop: false,
		    delay: false,
		    mobileHA: true
		});*/
    }
}

$(document).ready(function() {
    if ($('body').length) {
        svg.init();
    }        
});