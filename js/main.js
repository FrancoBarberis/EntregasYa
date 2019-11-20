function bootstrap() {

	var mapa = new Mapa("mapid");
	//var infoGetter = new InfoGetter("https://fastspeedster.herokuapp.com/api");
	var infoGetter = new InfoGetter("https://entregasya.herokuapp.com/api");
	mapa.init();

	var recorrido = new Recorrido();
	var runner = [];
	var chofer = [];
	var positions = [];
	var cameras = [];
	var incidentes = [];

	var movingMarkers = [];

	var getTrack = function(){
	 return infoGetter.getTrackInfo(42).
	 then(info => infoGetter.fillTrack(info, track)).
	 then(r => mapa.drawTrack(track))
 	}

	var getRecorrido = function(){
	 return infoGetter.getRecorridoChofer("107").
	 then(info => infoGetter.dibujarRecorrido(info, recorrido)).
	 then(r => mapa.drawRecorrido(recorrido))
 	}

	var getRunners = function() {
		return infoGetter.getRunnerInfo("").
		then(info => infoGetter.fillRunners(info, runner))
	}

	var getChofer = function() {
		//solo necesitamos dibujar chofer
		return infoGetter.getChoferInfo("").
		then(info => infoGetter.dibujarChofer(info, chofer)) 
	}

	var getPositions = function(){
		return infoGetter.getPositionInfo("").
		then(info => infoGetter.fillPositions(info, positions)).
		then(pos => infoGetter.asociatePosition(runner, positions)).
		then(r => console.log(runner))
	}
	var getPositions2 = function(){
		return infoGetter.getPositionsInfoChofer("").
		then(info => infoGetter.dibujarPositionsChofer(info, positions)).
		then(pos => infoGetter.asociatePositionChofer(chofer, positions)).
		then(r => console.log(runner))
	}

	var getCameras = function(){
		 return infoGetter.getCameraInfo(42).
		 then(info => infoGetter.fillCameras(info, cameras))

	}

	var getIncidentes = function(){
		 return infoGetter.getIncidente("").
		 then(info => infoGetter.dibujarIncidentes(info, incidentes))

	}

		/*$.when(getTrack(), getRunners(), getPositions(),getCameras()).
		done(p => runner.forEach(run => movingMarkers.push(mapa.drawRunner(run)))).
		done(p => cameras.forEach(cam => mapa.drawCamera(cam))).
		done(p => movingMarkers.forEach(marker => marker.start()))*/
		
		$.when(getRecorrido(), getChofer(), getPositions2(),getIncidentes()).
		done(p => chofer.forEach(run => movingMarkers.push(mapa.drawChofer(run)))).
		done(p => incidentes.forEach(inc => mapa.drawIncidente(inc))).
		done(p => movingMarkers.forEach(marker => marker.start()))

	//Hacer que se muevan
	//Y qué pasa con las cámaras?

}

$(bootstrap);
