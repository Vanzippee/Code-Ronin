function plates()
{
			//population size
			var pop=prompt("Population", "1000");
			//number of license plates
			var x=0;
			var y=0;
			//for testing last two figures
			var z=0;
			var j=0;
			
			document.write("<html><head><script type=\"text/javascript\" src=\"plates.js\"></script></head><body>");
			document.write("Population Size: " +pop);

//Find minimum number of figures to cover the entire population
			for (var n=0; Math.pow(35,(n+1))<pop; n++, z=n, x=Math.pow(35,n)) {
				
			}	
			
//Find the least waste by minimising last figures possibilities
			for (var i=1; Math.pow(35,z)*i<pop; i++, j=i, x=x*i) {
				
			}
			
			document.write("<br>");
			document.write("The plate has " +(z+1));
			document.write(" figures.");

//Find the least waste by checking the last two figures (more than this did not provide less waste in testing)
			for (var i=1; i<35; i++) {
				for (var k=1; k<35; k++) {
					y=Math.pow(35, (z-1))*i*k;
							if (y>pop && (y-pop)<(x-pop)) {
								x=y;
								j=k;
			document.write("<br>");								
			document.write("The second to last figure will use one of " +i);
			document.write(" figures.");
							}
				}
			}
			document.write("<br>");	
			document.write("The last figure will use one of " +j);
			document.write(" figures.");

//Sets x if the population is less than 35 
			if (pop<=35) {
				x=pop;
			}
			document.write("<br>");				
			document.write("You will make " +x);
			document.write(" plates and waste " +(x-pop));
			document.write(" plates.");
			document.write("<br>");	
			document.write("Figures chosen in this order: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.");
			document.write("<br> <input type=\"button\" onclick=\"plates()\" value=\"Enter Population\" /></body></html>");
			document.close();
}
