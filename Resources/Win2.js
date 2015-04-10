var newWin =Ti.UI.currentWindow;

var Title=Titanium.UI.createLabel({
	text:'Mason Woods Player Card',
	font:{fontSize:50,fontFamily:'Helvetica Neue'},
	top:10,

});

var mason= Titanium.UI.createImageView({
   image:'mason.jpg',
   top:'0',
   left:'0',
   height:'500',
   width:'300'
});

var heading3=Titanium.UI.createLabel({
	text:'<b>Player Statistics and Profile<b/>',
	font:{fontSize:50,fontFamily:'Helvetica Neue'},
	top:2,
	}); 

var heading4=Titanium.UI.createLabel({
	text:'<b>Height</b>:6ft9in',
	font:{fontSize:30,fontFamily:'Helvetica Neue'},
	top:80,
	right:200,
	}); 

var heading5=Titanium.UI.createLabel({
	text:'<b>Weight</b>:330',
	font:{fontSize:30,fontFamily:'Helvetica Neue'},
	top:130,
	right:220,
	}); 

var heading6=Titanium.UI.createLabel({
	text:'<b>WingSpan</b>:90"',
	font:{fontSize:30,fontFamily:'Helvetica Neue'},
	top:180,
	right:180,
	}); 

var heading7=Titanium.UI.createLabel({
	text:'<b>Expierience:</b>3 yrs',
	font:{fontSize:30,fontFamily:'Helvetica Neue'},
	top:230,
	right:145,
	});
	
	var heading8=Titanium.UI.createLabel({
	text:'<b><u>Combine Scores:</b></u>',
	font:{fontSize:50,fontFamily:'Helvetica Neue'},
	bottom:360,
	textAlignment:'center'
	});
	
	var heading9=Titanium.UI.createLabel({
	text:'<b>40 Time:</b>5.2sec',
	font:{fontSize:30,fontFamily:'Helvetica Neue'},
	bottom:300,
	left:40,
	});
	
	var heading10=Titanium.UI.createLabel({
	text:'<b>225 Bench Reps:</b>18',
	font:{fontSize:30,fontFamily:'Helvetica Neue'},
	bottom:300,
	right:100,
	});

var heading11=Titanium.UI.createLabel({
	text:'<b>5-10-5 Time:</b>4.9sec',
	font:{fontSize:30,fontFamily:'Helvetica Neue'},
	bottom:200,
	left:40,
	});

var heading12=Titanium.UI.createLabel({
	text:'<b>L Test Time:</b>8sec',
	font:{fontSize:30,fontFamily:'Helvetica Neue'},
	bottom:200,
	right:120,
	});

var heading13=Titanium.UI.createLabel({
	text:'<b>Vertical Jump:</b>28inch',
	font:{fontSize:30,fontFamily:'Helvetica Neue'},
	bottom:100,
	right:65,
	});

var heading14=Titanium.UI.createLabel({
	text:'<b>Broad Jump:</b>8ft',
	font:{fontSize:30,fontFamily:'Helvetica Neue'},
	bottom:100,
	left:40,
	});




newWin.addEventListener('click', function(e){
	newWin.close();
});
newWin.add(heading3);	
newWin.add(mason);
newWin.add(heading4);
newWin.add(heading5);
newWin.add(heading6);
newWin.add(heading7);
newWin.add(heading8);
newWin.add(heading9);
newWin.add(heading10);
newWin.add(heading11);
newWin.add(heading12);
newWin.add(heading13);
newWin.add(heading14);




newWin.open();