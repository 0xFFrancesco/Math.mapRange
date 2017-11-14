(function( m ){
	
	if ( !m.mapRange ) {
		
		m.mapRange = function mapRange( min, max, v, newMin, newMax ){
			
			if ( v <= min ) {
				return newMin;
			}
			
			if ( v >= max ) {
				return newMax;
			}
			
			v -= min;
			max -= min;
			
			const percentage = (v / max) * 100;
			const newStep    = (newMax - newMin) / 100;
			
			return percentage * newStep + newMin;
			
		};
		
	} else {
		
		console.warn('Math.mapRange is already defined!')
		
	}
	
})(Math);