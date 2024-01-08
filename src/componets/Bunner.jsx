
export default function Bunner(){


    return (

       <div class="banner__area" data-background="assets/img/">
		<div class="container">
			<div class="row">
				<div class="col-xl-12">
					<div class="banner__area-title">
						<h1>Kryptons Apartment <span>Our Home </span></h1>
						
								<img class="img__full" src="/assets/img/features/photo1685189957.jpeg" alt=""/>
						
					</div>
				</div>
			</div>
			<div class="row">
				<form action="#">
					<div class="check__area">
						<div class="check__area-item">						
							<p>Check In<input id="date" type="date"/></p>								
						</div>
						<div class="check__area-item">						
							<p>Check Out<input id="date2" type="date"/></p>								
						</div>
						<div class="check__area-item">						
							<div class="check__area-item-room">
								<p>Room</p>
								<select name="select">
									<option value="1">1 Room</option>
									<option value="2">2 Room</option>
									<option value="3">3 Room</option>
									<option value="4">4 Room</option>
									<option value="5">5 Room</option>
								</select>
							</div>								
						</div>
						<div class="check__area-item button">
							<button class="theme-btn" type="submit">Check Now</button>							
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
    )
}