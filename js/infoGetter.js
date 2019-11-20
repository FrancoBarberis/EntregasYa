var InfoGetter = function(){
	this.mainUrl = "https://entregasya.herokuapp.com/api";
	//obtiene pedidos 
	this.getPedidosInfo = function(idPedido){
		return $.ajax(this.mainUrl + "/requests/" + idPedido);

	}
	//obtiene deliverys
	this.getDeliverys = function(idDelivery){
		return $.ajax(this.mainUrl + "/deliverydrivers/" + idDelivery);

	}
	//obtiene las posiciones de los deliverys
	this.getPosicionesDelivery = function(idDelivery){
		return $.ajax(this.mainUrl + "/deliverydrivers/" + idDelivery + "/positions/");

	}
	//obtiene los incidentes
	this.getIncidentes = function(idIncidente){
		return $.ajax(this.mainUrl + "/incidents/" + idIncidente);

	}
	//obtiene los tipos
	this.getTiposIncidentes = function(idIncidente){
		return $.ajax(this.mainUrl + "/incidenttypes/" + idIncidente);

	}


}
