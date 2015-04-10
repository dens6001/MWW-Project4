var landing=Titanium.UI.createWindow({
	backgroundImage:'helmet2.jpg'
});

var heading=Titanium.UI.createLabel({
	text:'Mason Woods Player Card',
	font:{fontSize:50,fontFamily:'Helvetica Neue'},
	top:10,
	
}); 

var heading2=Titanium.UI.createLabel({
	text:'Idaho Vandals OT',
	font:{fontSize:50,fontFamily:'Helvetica Neue'},
	top:45,
	}); 

var contact=Titanium.UI.createLabel({
	text:'<b>Email</b>:wood8139@vandals.uidaho.edu',
	font:{fontSize:30,fontFamily:'Helvetica Neue'},
	bottom:40
	}); 
	
var contact2=Titanium.UI.createLabel({
	text:'<b>Phone</b>:208-888-1234',
	font:{fontSize:30,fontFamily:'Helvetica Neue'},
	bottom:10
	}); 	
landing.addEventListener('click', function(e){
	var win2=Titanium.UI.createWindow({
		url:'Win2.js',
		backgroundColor:'white'
	});
	win2.open();
});
landing.add(contact2);	
landing.add(contact);	
landing.add(heading2);
landing.add(heading);
landing.open();

