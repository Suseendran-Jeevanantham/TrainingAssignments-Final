function Number_Exception(){
			var i;
				for(i = 1;i<=100;i++){
					try
						{
							if(i%3===0 && i%5===0)
								{
									throw new Error("FizzBuzz");
								}
							if(i%3===0)
								{
									throw new Error("Fizz");
								}
							else if(i%5===0 && i%3!==0)
								{
									throw new Error("Buzz");
								}
							else
								{
									console.log(i);
								}
						}
						catch(e)
						{
						   console.log(e);
						}
				}
			}