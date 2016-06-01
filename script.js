$(document).ready(function() {

	//---music---//
		var music = [
			["forwhateverreason","forwhateverreason.png","For Whatever Reason",[
				["Octive March","octivemarch.mp3"],
				["Daydream Come True 2","daydreamcometrue2.mp3"],
				["Riff","riff.mp3"],
				["Parade","parade.mp3"],
				["Just in Time","justintime.mp3"],
				["Consort Concerto for Piano","consortconcertoforpiano.mp3"],
				["Spider Jazz","spiderjazz.mp3"],
				["Baroquen Dreams","baroquendreams.mp3"],
				["Cerulean Underground","ceruleanunderground.mp3"],
				["SoW British March","sowbritishmarch.mp3"],
				["SoW Russian March","sowrussianmarch.mp3"],
				["Into the Void 2","intothevoid2.mp3"],
				["Stride Piano","stridepiano.mp3"],
				["A Drop of Death","adropofdeath.mp3"],
				["Sitting at a Stone Table","sittingatastonetable.mp3"],
				["Breaking Open the Box","breakingopenthebox.mp3"],
			]],
			["eternalhorizon","eternalhorizon.png","Eternal Horizon",[
				["Eternal Horizon","eternalhorizon.mp3"],
				["Midnight Retreat","midnightretreat.mp3"],
				["Golden Hope","goldenhope.mp3"],
				["Epic of Koranames","epicofkoranames.mp3"],
				["Windwater","windwater.mp3"],
				["Clifftop Clash","clifftopclash.mp3"],
				["Paradaze","paradaze.mp3"],
				["Summer's End","summersend.mp3"],
				["Pachelbel's Catapult","pachelbelscatapult.mp3"],
				["March of the Pine Trees","marchofthepinetrees.mp3"],
				["Frost Rain","frostrain.mp3"],
				["Another Epic Journey","anotherepicjourney.mp3"],
				["Seafoam and Sunsets","seafoamandsunsets.mp3"],
				["Falling Flowers","fallingflowers.mp3"],
				["Dreamcatcher","dreamcatcher.mp3"],
				["Morning Dew","morningdew.mp3"],
			]],
			["skyburst","skyburst.png","Skyburst",[
				["Sunlight Silhouette","sunlightsilhouette.mp3"],
				["Evergray","evergray.mp3"],
				["Hot Air Balloons","hotairballoons.mp3"],
				["Tales of a Nothing Little Town","talesofanothinglittletown.mp3"],
				["November March","novemebermarch.mp3"],
				["December March","decembermarch.mp3"],
				["Tales of the Broken City","talesofthebrokencity.mp3"],
				["Victorious Valediction","victoriousvalediction.mp3"],
				["Time","time.mp3"],
				["Bells and Whistles","bellsandwhistles.mp3"],
				["Fireplace","fireplace.mp3"],
				["Terza Rima","terzarima.mp3"],
				["Firestorm Sea","firestormsea.mp3"],
				["Clear Blue","clearblue.mp3"],
				["Rebirth","rebirth.mp3"],
				["Skyburst","skyburst.mp3"],
			]],
			["shadowvalley","shadowvalley.png","Shadow Valley",[
				["Stride","stride.mp3"],
				["Beforestory","beforestory.mp3"],
				["January March","januarymarch.mp3"],
				["The Wall","thewall.mp3"],
				["Gray Destiny","graydestiny.mp3"],
				["Snowshade","snowshade.mp3"],
				["Spirit of Adventure","spiritofadventure.mp3"],
				["Far-Fading Lights","farfadinglights.mp3"],
				["Shadow Valley","shadowvalley.mp3"],
				["October Twilight","octobertwilight.mp3"],
				["Lullabybye","lullabybye.mp3"],
				["Jungle Noon","junglenoon.mp3"],
				["Finding Your Place","findingyourplace.mp3"],
				["Air","air.mp3"],
				["Fire","fire.mp3"],
				["Earth","earth.mp3"],
			]],
			["draftsadrift","draftsadrift.png","Drafts Adrift",[
				["Souls of War Theme","soulsofwartheme.mp3"],
				["MegaStar RaceWay","megastarraceway.mp3"],
				["Harmony Hums","harmonyhums.mp3"],
				["Pretense","pretense.mp3"],
				["Quickstep Crash","quickstepcrash.mp3"],
				["In the Middle of the Month of March","inthemiddleofthemonthofmarch.mp3"],
				["Tumbleweed Standoff","tumbleweedstandoff.mp3"],
				["Fanfare Variations","fanfarevariations.mp3"],
				["Darkness Dungeon","darknessdungeon.mp3"],
				["Seafarer's Ballad","seafarersballad.mp3"],
				["Island Jazz","islandjazz.mp3"],
				["Contemplation","contemplation.mp3"],
				["Meteor Wasteland","meteorwasteland.mp3"],
				["Keep Calm and Carry On","keepcalmandcarryon.mp3"],
				["Robot Waltz","robotwaltz.mp3"],
				["Clarinet Corral","clarinetcorral.mp3"],
			]],
			["cascade","cascade.png","Cascade",[
				["Uplift","uplift.mp3"],
				["Freefall","freefall.mp3"],
				["Plummet","plummet.mp3"],
				["Marvel at the Sky","marvelatthesky.mp3"],
				["Yesteryear's July","yesteryearsjuly.mp3"],
				["I'll Be Fine","illbefine.mp3"],
				["Consort Concerto for Winds","consortconcertoforwinds.mp3"],
				["Gleam","gleam.mp3"],
				["Solstice Song","solsticesong.mp3"],
				["Mistaken Faces","mistakenfaces.mp3"],
				["Quest","quest.mp3"],
				["Brass Blaster","brassblaster.mp3"],
				["Modernity","modernity.mp3"],
				["Ice","ice.mp3"],
				["Chameleon","chameleon.mp3"],
				["Into the Void","intothevoid.mp3"],
			]],
			["draftsadrift2","draftsadrift2.png","Drafts Adrift 2",[
				["Sounddrawn","sounddrawn.mp3"],
				["Abraham Lincoln","abrahamlincoln.mp3"],
				["Puzzlement","puzzlement.mp3"],
				["Snake-a-pede","snakeapede.mp3"],
				["Pizzicato Pulse","pizzicatopulse.mp3"],
				["SoW French Theme","sowfrenchtheme.mp3"],
				["SoW Transitions","sowtransitions.mp3"],
				["SoW German Theme","sowgermantheme.mp3"],
				["SoW American March","sowamericanmarch.mp3"],
				["Wavering Black","waveringblack.mp3"],
				["Rainscape","rainscape.mp3"],
				["Don't Touch Me; I Hate You","donttouchmeihateyou.mp3"],
				["Road Crosser","roadcrosser.mp3"],
				["Ski Slope Theme","skislopetheme.mp3"],
				["Chromatones","chromatones.mp3"],
				["Together Again","togetheragain.mp3"],
			]],
			["captainchronosailsthroughtime","captainchronosailsthroughtime.png","Captain Chrono Sails Through Time",[
				["Home","home.mp3"],
				["Apocalypse","apocalypse.mp3"],
				["Solemnes","solemnes.mp3"],
				["Mobster Maze","mobstermaze.mp3"],
				["Conquistadores","conquistadores.mp3"],
				["Ragtime Locomotive","ragtimelocomotive.mp3"],
				["Drums","drums.mp3"],
				["Gamelan Jazz","gamelanjazz.mp3"],
				["Celtic Castle","celticcastle.mp3"],
				["Old West in the Middle East","oldwestinthemiddleeast.mp3"],
				["Isla del Sol","isladelsol.mp3"],
				["Shamisen Shimmer","shamisenshimmer.mp3"],
				["Synthphony","synthphony.mp3"],
				["Life on Mars","lifeonmars.mp3"],
				["Frontlines","frontlines.mp3"],
				["Alexander","alexander.mp3"],
			]],
			["penduluminous","penduluminous.png","Penduluminous",[
				["After All","afterall.mp3"],
				["Would You Be My Muse?","wouldyoubemymuse.mp3"],
				["Ghost in the Drum Machine","ghostinthedrummachine.mp3"],
				["Where We Left Off","whereweleftoff.mp3"],
				["Flash (Hurry Up and Wait)","flashhurryupandwait.mp3"],
				["You Told Me That You Loved Me Too Soon","youtoldmethatyoulovedmetoosoon.mp3"],
				["Treasure","treasure.mp3"],
				["Moonlight","moonlinght.mp3"],
				["Wheels Turning","wheelsturning.mp3"],
				["Sorry I'm So Late","sorryimsolate.mp3"],
				["Tell Me","tellme.mp3"],
				["Rise","rise.mp3"],
				["Swing, Pendulum, Swing","swingpendulumswing.mp3"],
				["One Day","oneday.mp3"],
				["Minus Money","minusmoney.mp3"],
				["365","365.mp3"],
			]],
			["thedeathmakerssymphony","thedeathmakerssymphony.png","The Deathmakers' Symphony",[
				["Adaptation","adaptation.mp3"],
				["Shipwreck","shipwreck.mp3"],
				["A Most Peculiar Child","amostpeculiarchild.mp3"],
				["Becoming Friends","becomingfriends.mp3"],
				["Jailbreak!","jailbreak.mp3"],
				["The Dragon","thedragon.mp3"],
				["Never Been Home Before","neverbeenhomebefore.mp3"],
				["Maybe Something More","maybesomethingmore.mp3"],
				["Construction","construction.mp3"],
				["Bittersweet","bittersweet.mp3"],
				["Sails on the Horizon","sailsonthehorizon.mp3"],
				["Annihilation","annihilation.mp3"],
				["The Lightning Isle","thelightningisle.mp3"],
				["Lovelost","lovelost.mp3"],
				["The Cure","thecure.mp3"],
				["Forever","forever.mp3"],
			]],
			["singles","singles.png","Singles",[
				["Goodbye","goodbye.m4a"],
				["Motion","motion.m4a"],
				["Engine","engine.m4a"],
				["Concede","concede.m4a"],
				["Interconnected","interconnected.m4a"],
				["Sunshine","sunshine.m4a"],
				["Expedition","expedition.m4a"],
				["Window","window.m4a"],
				["Villain","villain.m4a"],
				["Ambition","ambition.m4a"],
				["Exhaustion","exhaustion.m4a"],
				["Facade","facade.m4a"],
				["Train","train.m4a"],
				["Weight","weight.m4a"],
				["Doubt","doubt.m4a"],
				["Hello","hello.m4a"],
			]]
		];

	//---showAlbums---//
		function showAlbums(music) {
			$("#selection").append("<div id='nowPlayingBox' style='background-image: url(artwork/sounddrawn.png)'><div id='nowPlayingInfo'>now playing<div id='nowPlayingSong'>Sounddrawn</div><div id='nowPlayingAlbum'></div></div></div>");

			music.reverse();
			for (var i = 0; i < music.length; i++) {
				$("#selection").append("<div id='" + music[i][0] + "' class='album' style='background-image: url(artwork/" + music[i][1] + ")'></div>");
			}
		}

	//---showTracks--//
		function showTracks(music,clickedAlbum) {
			console.log("displaying " + clickedAlbum);

			for (var i = 0; i < music.length; i++) {
				if (music[i][0] === clickedAlbum) {
					$(".album").empty();
					$("#" + clickedAlbum).append("<div id='listing'></div>");
					
					var listing = "";
					for (var j = 0; j < music[i][3].length; j++) {
						listing = listing + "<li id='" + music[i][3][j][1] + "' class='trackname'>" + music[i][3][j][0] + "</li>";
					}

					$("#listing").append("<ol>" + listing + "</ol>");
				}
			}
		}

	//---switchSongs---//
		function switchSongs(music,clickedSong) {
			console.log("playing " + clickedSong);

			for (var i = 0; i < music.length; i++) {
				for (var j = 0; j < music[i][3].length; j++) {
					if (music[i][3][j][1] === clickedSong) {
						$("#nowPlayingSong").empty().append(music[i][3][j][0]);
						$("#nowPlayingAlbum").empty().append(music[i][2]);

						var player = $("#nowPlaying").attr("src","music/" + clickedSong);
						$("audio").trigger("pause").load().trigger("play");
					}
				}
			}
		}

	//---getNext---//
		function getNext(music,currentSong) {
			console.log("finished " + currentSong);

			for (var i = 0; i < music.length; i++) {
				for (var j = 0; j < music[i][3].length; j++) {
					if (music[i][3][j][1] === currentSong) {
						if (music[i][3].length > (j + 1)) {
							console.log("next song");
							var nextSong = music[i][3][j + 1][1];
						}
						else {
							console.log("restarting album");
							var nextSong = music[i][3][0][1];
						}
					}
				}
			}

			return nextSong;
		}

	//---actions---//
		showAlbums(music);

		$(document).on("click",".album",function() {
			showTracks(music,this.id);
		});

		$(document).on("click",".trackname",function() {
			switchSongs(music,this.id);
		});

		audio.addEventListener("ended", function(){
			currentSong = String($("source").attr("src")).substring(6);
			switchSongs(music,getNext(music,currentSong));
		});

});