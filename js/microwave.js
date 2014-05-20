$(document).ready(function(){
	    	
  			$('img[usemap]').rwdImageMaps();
	
			$('area').on('mouseover', function() {
				//alert($(this).attr('alt') + ' clicked');
				//$(this).css({ "background-color:", "#OOO"});
			});

    	 	$("#vidCon0").fitVids();
    	 	$("#vidCon1").fitVids();
    	 	$("#vidCon2").fitVids();
    	 	$("#vidCon3").fitVids();

	        
			//RANDOM STUFF
			$('.nav li a').on('click',function(){
	    		$('.navbar-collapse.in').collapse('hide');
			});

						
			var params;
			function getURLParameter(sParam) {
				    var sPageURL = window.location.search.substring(1);
				    var sURLVariables = sPageURL.split('&');
				    
				    for (var i = 0; i < sURLVariables.length; i++) {
				        var sParameterName = sURLVariables[i].split('=');
				        if (sParameterName[0] == sParam) {
				            params = sParameterName[1];
				            
				            if (params) {
				            	$("#desc").hide();
				            	$("#thetitle").hide();
				            	$("#thesubtitle").hide();
				            	$("#theMenu").hide();
				            	$("#descEmbed").show();
				            	$("#shareCon").hide();
				            	$(".backtotop").hide();

				            }

				            return sParameterName[1];
				        } else {
				        	return 1;
				        }
				    }
				}
			getURLParameter("embed");

			//END RANDOM STUFF


			//DFM HEADER
			var dfmSites = ['digitalfirstmedia.com', 'contracostatimes.com', 'insidebayarea.com', 'marinij.com', 'mercurynews.com', 'santacruzsentinel.com', 'siliconvalley.com', 'canoncitydailyrecord.com', 'dailycamera.com', 'denverpost.com', 'fortmorgantimes.com', 'journal-advocate.com', 'reporterherald.com', 'timescall.com', 'coloradodaily.com', 'middletownpress.com', 'nhregister.com', 'registercitizen.com', 'dailybreeze.com ', 'dailybulletin.com', 'dailynews.com', 'pasadenastarnews.com', 'presstelegram.com', 'redlandsdailyfacts.com', 'sbsun.com', 'sgvtribune.com', 'whittierdailynews.com', 'la.com', 'berkshireeagle.com', 'lowellsun.com', 'sentinelandenterprise.com', 'thetranscript.com', 'dailytribune.com', 'macombdaily.com', 'themorningsun.com', 'theoaklandpress.com', 'heritage.com', 'twincities.com', 'trentonian.com', 'alamogordonews.com', 'currentargus.com', 'daily-times.com', 'lcsun-news.com', 'demingheadlight.com', 'ruidosonews.com', 'scsun-news.com', 'dailyfreeman.com', 'oneidadispatch.com', 'saratogian.com', 'troyrecord.com', 'chicoer.com', 'dailydemocrat.com', 'montereyherald.com', 'record-bee.com', 'redbluffdailynews.com', 'thereporter.com', 'times-standard.com', 'timesheraldonline.com', 'ukiahdailyjournal.com', 'orovillemr.com', 'morningjournal.com', 'news-herald.com', 'delcotimes.com', 'pottsmerc.com', 'thereporteronline.com', 'timesherald.com', 'ydr.com', 'montgomerynews.com', 'elpasotimes.com', 'benningtonbanner.com', 'reformer.com', 'businessjournals.com', 'ldnews.com', 'eveningsun.com', 'publicopiniononline.com'];
	    	var theref = document.referrer.split('/')[2];
	    	var thedomain;
	    	
			var rand = dfmSites[Math.floor(Math.random() * dfmSites.length)];
			dfmNav.initParams('mode|article', 'site|' + rand, 'pageTitle| Food & Dining', 'leaderboard|false', 'thirdParty|true');
		});
