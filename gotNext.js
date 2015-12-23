
//NOTE, this is untested. Started Wednesday December 23rd at 2 a.m. 
//It's been 23 minutes and I'm pretty tired so don't bark at me for 
//pushing untested code, just read it and edit it

function nextEpisode(){
	console.log("what i learned in boating school today is\n");//debug statement
	
	var link = document.getElementById('btnNext').href;//get the address
														//of the next ep.
	chrome.tabs.create({'url': link});//create a new tab with link
	chrome.tabs.remove({active: true});//close active tab (order is important)
	var queryInfo = {//query tab for episode just opened, set activee
			'url': link
	};
	chrome.tabs.query(queryInfo, function(tabs){//find tab we opened
			tabs[0].active = true; //set that tab to active
	});
	var vid = document.getElementById("my_video_1_html5_api");//id for every video on kiss anime
	var sleep = vid.duration;//duration of the video IN SECONDS, if there is no video
							//NaN is returned
	//sleep will be the value of which to sleep for
	//Kiss anime.com already starts playing the episode 
	//the moment the tab is opened. 
}


//Instead of a 'click' command, we need 'onLoad' or something similar
//NOTE, in chrome, you must add event listeners, you cannot do "in-line" event handling
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('').addEventListener('click', closeNetflixTab);
});

