$(document).ready(function() {

	//---music---//
		var music = [
			["forwhateverreason","forwhateverreason.png","For Whatever Reason",[
				["Octive March","octivemarch.m4a"],
				["Daydream Come True 2","daydreamcometrue2.m4a"],
				["Riff","riff.m4a"],
				["Parade","parade.m4a"],
				["Just in Time","justintime.m4a"],
				["Consort Concerto for Piano","consortconcertoforpiano.m4a"],
				["Spider Jazz","spiderjazz.m4a"],
				["Baroquen Dreams","baroquendreams.m4a"],
				["Cerulean Underground","ceruleanunderground.m4a"],
				["SoW British March","sowbritishmarch.m4a"],
				["SoW Russian March","sowrussianmarch.m4a"],
				["Into the Void 2","intothevoid2.mp3"],
				["Stride Piano","stridepiano.m4a"],
				["A Drop of Death","adropofdeath.m4a"],
				["Sitting at a Stone Table","sittingatastonetable.m4a"],
				["Breaking Open the Box","breakingopenthebox.m4a"],
			]],
			["eternalhorizon","eternalhorizon.png","Eternal Horizon",[
				["Eternal Horizon","eternalhorizon.m4a"],
				["Midnight Retreat","midnightretreat.m4a"],
				["Golden Hope","goldenhope.m4a"],
				["Epic of Koranames","epicofkoranames.m4a"],
				["Windwater","windwater.m4a"],
				["Clifftop Clash","clifftopclash.m4a"],
				["Paradaze","paradaze.m4a"],
				["Summer's End","summersend.m4a"],
				["Pachelbel's Catapult","pachelbelscatapult.m4a"],
				["March of the Pine Trees","marchofthepinetrees.m4a"],
				["Frost Rain","frostrain.m4a"],
				["Another Epic Journey","anotherepicjourney.m4a"],
				["Seafoam and Sunsets","seafoamandsunsets.m4a"],
				["Falling Flowers","fallingflowers.m4a"],
				["Dreamcatcher","dreamcatcher.m4a"],
				["Morning Dew","morningdew.m4a"],
			]],
			["skyburst","skyburst.png","Skyburst",[
				["Sunlight Silhouette","sunlightsilhouette.m4a"],
				["Evergray","evergray.m4a"],
				["Hot Air Balloons","hotairballoons.m4a"],
				["Tales of a Nothing Little Town","talesofanothinglittletown.m4a"],
				["November March","novemebermarch.m4a"],
				["December March","decembermarch.m4a"],
				["Tales of the Broken City","talesofthebrokencity.m4a"],
				["Victorious Valediction","victoriousvalediction.m4a"],
				["Time","time.m4a"],
				["Bells and Whistles","bellsandwhistles.m4a"],
				["Fireplace","fireplace.m4a"],
				["Terza Rima","terzarima.m4a"],
				["Firestorm Sea","firestormsea.m4a"],
				["Clear Blue","clearblue.m4a"],
				["Rebirth","rebirth.m4a"],
				["Skyburst","skyburst.m4a"],
			]],
			["shadowvalley","shadowvalley.png","Shadow Valley",[
				["Stride","stride.m4a"],
				["Beforestory","beforestory.m4a"],
				["January March","januarymarch.m4a"],
				["The Wall","thewall.m4a"],
				["Gray Destiny","graydestiny.m4a"],
				["Snowshade","snowshade.m4a"],
				["Spirit of Adventure","spiritofadventure.m4a"],
				["Far-Fading Lights","farfadinglights.m4a"],
				["Shadow Valley","shadowvalley.m4a"],
				["October Twilight","octobertwilight.m4a"],
				["Lullabybye","lullabybye.m4a"],
				["Jungle Noon","junglenoon.m4a"],
				["Finding Your Place","findingyourplace.m4a"],
				["Air","air.m4a"],
				["Fire","fire.m4a"],
				["Earth","earth.m4a"],
			]],
			["draftsadrift","draftsadrift.png","Drafts Adrift",[
				["Souls of War Theme","soulsofwartheme.m4a"],
				["MegaStar RaceWay","megastarraceway.m4a"],
				["Harmony Hums","harmonyhums.m4a"],
				["Pretense","pretense.m4a"],
				["Quickstep Crash","quickstepcrash.m4a"],
				["In the Middle of the Month of March","inthemiddleofthemonthofmarch.m4a"],
				["Tumbleweed Standoff","tumbleweedstandoff.m4a"],
				["Fanfare Variations","fanfarevariations.m4a"],
				["Darkness Dungeon","darknessdungeon.m4a"],
				["Seafarer's Ballad","seafarersballad.m4a"],
				["Island Jazz","islandjazz.m4a"],
				["Contemplation","contemplation.m4a"],
				["Meteor Wasteland","meteorwasteland.m4a"],
				["Keep Calm and Carry On","keepcalmandcarryon.m4a"],
				["Robot Waltz","robotwaltz.m4a"],
				["Clarinet Corral","clarinetcorral.m4a"],
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

	//---actions---//
		showAlbums(music);

		$(document).on("click",".album",function() {
			showTracks(music,this.id);
		});

		$(document).on("click",".trackname",function() {
			switchSongs(music,this.id);
		});

		audio.addEventListener("ended", function(){
			console.log("test");
		});

});