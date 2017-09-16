function TransformerFight(ArrayOfStrings){
	Decepticon=0;
	Autobot=0;
	numfights=0;
	Decepticonarray=[];
	Autobotarray=[];
	SurvivingDecepticonArray=[];
	SurvivingAutobotArray=[];
	for(var i=0;i<ArrayOfStrings.length;i++){
	  stringbot=ArrayOfStrings[i][0];
		bot = stringbot.split(",");
		if(bot[1]==="D"){Decepticonarray.push(bot)}
		else if(bot[1]==="A"){Autobotarray.push(bot)}

	}

	DecepticonFightingOrder=[];
	AutobotFightingOrder=[];
	for(var a=0;a<Autobotarray.length;a++){
		AutobotFightingOrder.push([Autobotarray[a][0],(parseInt(Autobotarray[a][2])+parseInt(Autobotarray[a][3])+parseInt(Autobotarray[a][4])+parseInt(Autobotarray[a][5])+parseInt(Autobotarray[a][6])+parseInt(Autobotarray[a][7])+parseInt(Autobotarray[a][8])+parseInt(Autobotarray[a][9])),parseInt(Autobotarray[a][2]),parseInt(Autobotarray[a][3]),parseInt(Autobotarray[a][4]),parseInt(Autobotarray[a][5]),parseInt(Autobotarray[a][6]),parseInt(Autobotarray[a][7]),parseInt(Autobotarray[a][8]),parseInt(Autobotarray[a][9])]);
	}
	for(var b=0;b<Decepticonarray.length;b++){
		DecepticonFightingOrder.push([Decepticonarray[b][0],(parseInt(Decepticonarray[b][2])+parseInt(Decepticonarray[b][3])+parseInt(Decepticonarray[b][4])+parseInt(Decepticonarray[b][5])+parseInt(Decepticonarray[b][6])+parseInt(Decepticonarray[b][7])+parseInt(Decepticonarray[b][8])+parseInt(Decepticonarray[b][9])),parseInt(Decepticonarray[b][2]),parseInt(Decepticonarray[b][3]),parseInt(Decepticonarray[b][4]),parseInt(Decepticonarray[b][5]),parseInt(Decepticonarray[b][6]),parseInt(Decepticonarray[b][7]),parseInt(Decepticonarray[b][8]),parseInt(Decepticonarray[b][9])]);
	}

	AutobotFightingOrder.sort(function(a,b) {
        return b[1]-a[1];
    });

	DecepticonFightingOrder.sort(function(a,b) {
        return b[1]-a[1];
    });
  
	if(DecepticonFightingOrder.length>AutobotFightingOrder.length){numfights=AutobotFightingOrder.length}
	else if(DecepticonFightingOrder.length<=AutobotFightingOrder.length){numfights=DecepticonFightingOrder.length}

	for(var f=0;f<numfights;f++){

		if(AutobotFightingOrder[f][0]==="Optimus Prime" && DecepticonFightingOrder[f][0]==="Predaking"){return "Everyone has been destroyed!"}
		else if(AutobotFightingOrder[f][0]==="Optimus Prime"){Autobot+=1;SurvivingAutobotArray.push(AutobotFightingOrder[f])}
		else if(DecepticonFightingOrder[f][0]==="Predaking"){Decepticon+=1;SurvivingDecepticonArray.push(DecepticonFightingOrder[f])}
		else if(AutobotFightingOrder[f][7]-DecepticonFightingOrder[f][7]>=4){Autobot+=1;SurvivingAutobotArray.push(AutobotFightingOrder[f])}
		else if(DecepticonFightingOrder[f][7]-AutobotFightingOrder[f][7]>=4){Decepticon+=1;SurvivingDecepticonArray.push(DecepticonFightingOrder[f])}
		else if(AutobotFightingOrder[f][9]-DecepticonFightingOrder[f][9]>=3){Autobot+=1;SurvivingAutobotArray.push(AutobotFightingOrder[f])}
		else if(DecepticonFightingOrder[f][9]-AutobotFightingOrder[f][9]>=3){Decepticon+=1;SurvivingDecepticonArray.push(DecepticonFightingOrder[f])}
		else if(AutobotFightingOrder[f][1]>DecepticonFightingOrder[f][1]){Autobot+=1;SurvivingAutobotArray.push(AutobotFightingOrder[f])}
		else if(DecepticonFightingOrder[f][1]>AutobotFightingOrder[f][1]){Decepticon+=1;SurvivingDecepticonArray.push(DecepticonFightingOrder[f])}
	}
	if(AutobotFightingOrder.length>numfights){
		for (var k=numfights;k<AutobotFightingOrder.length;k++){
			SurvivingAutobotArray.push(AutobotFightingOrder[k]);
		}
	}
	if(DecepticonFightingOrder.length>numfights){
		for (var l=numfights;l<DecepticonFightingOrder.length;l++){
			SurvivingDecepticonArray.push(DecepticonFightingOrder[l]);
		}
	}

	if(parseInt(Decepticon)>parseInt(Autobot)){return "Decepticons have won! Decepticons: "+ Decepticon+ ", Autobots: "+ Autobot+ ", Number of Surviving Autobots: "+ SurvivingAutobotArray.length + "."}
	else if(Decepticon<Autobot){return "Autobots have won! Autobots: "+ Autobot+ ", Decepticons: "+ Decepticon+ ", Number of Surviving Decepticons: "+ SurvivingDecepticonsArray.length + "."}
	else if(Decepticon===Autobot){return "Autobots and Decepticons have tied at "+ Autobot+ " each! With " + SurvivingDecepticonsArray.length + "Surviving Decepticons and " + SurvivingAutobotArray.length + "Surviving Autobots."}



}

TransformerFight([["Soundwave,D,8,9,2,6,7,5,6,10"],["Bluestreak,A,6,6,7,9,5,2,9,7"],["Hubcap,A,4,4,4,4,4,4,4,4"]]);