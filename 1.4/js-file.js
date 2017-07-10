function Right_Triangle(){
				for(i=1;i<=10;i++){
					for(j=1;j<=10;j++){
						for(k=1;k<=10;k++){
							if(i+j+k === 24 && EvaluateRightTraiangle(i,j,k)){
								console.log("i=" + i + " j=" + j + " k=" +k);
							}
						}
					}
				}
			}

function EvaluateRightTraiangle(i,j,k){
    if(Math.max(i,j,k) === i){
        return i*i === j*j + k*k;
    }
    if(Math.max(i,j,k) === j){
        return j*j === i*i + k*k;
    }
    if(Math.max(i,j,k) === k){
        return k*k === j*j + i*i;
    }
}