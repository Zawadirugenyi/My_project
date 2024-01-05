export default function Deluxearea(){

    return(

        <div class="deluxe__area section-padding">
		<div class="container">
			<div class="row align-items-end mb-60">
				<div class="col-xl-5">
					<div class="deluxe__area-title">
						<span class="subtitle__one">Deluxe and Luxury</span>
						<h2>Our Luxury Rooms</h2>
					</div>					
				</div>
				<div class="col-xl-7">
					<div class="deluxe__area-btn">
						<ul>
							<li class="active" data-filter="*">All Rooms</li>
							<li data-filter=".luxury">Luxury</li>
							<li data-filter=".single">Single</li>
							<li data-filter=".suite">Small Suite</li>
							<li data-filter=".family">Family</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="row deluxe__area-active">
				<div class="col-xl-3 col-lg-4 mb-30 suite">
					<div class="deluxe__area-item"> 
						<div class="deluxe__area-item-image">
							<img class="img__full" src="assets/img/photo_6010393430800317779_y.jpg" alt=""/>
						</div>
						<div class="deluxe__area-item-content"> 
							<h6><a href="#"><span>$134</span> / Night</a></h6>
							<h4><a href="room-details.html">Small Suite</a></h4>
							<a class="simple-btn" href="contact.html"><i class="far fa-chevron-right"></i>Booking Now</a> 
						</div>
					</div>
				</div>
				<div class="col-xl-6 col-lg-8 mb-30 suite">
					<div class="deluxe__area-item deluxe__area-item-hover"> 
						<div class="deluxe__area-item-image">
							<img class="img__full" src="assets/img/photo_6010393430800317783_y.jpg" alt=""/>
						</div>
						<div class="deluxe__area-item-content"> 
							<h6><a href="#"><span>$199</span> / Night</a></h6>
							<h4><a href="room-details.html">Deluxe Room</a></h4>
							<a class="simple-btn" href="contact.html"><i class="far fa-chevron-right"></i>Booking Now</a> 
						</div>
					</div>
				</div>
				<div class="col-xl-3 col-lg-4 mb-30 family">
					<div class="deluxe__area-item"> 
						<div class="deluxe__area-item-image">
							<img class="img__full" src="assets/img/photo_6010393430800317782_y.jpg" alt=""/>
						</div>
						<div class="deluxe__area-item-content"> 
							<h6><a href="#"><span>$319</span> / Night</a></h6>
							<h4><a href="room-details.html">Family Room</a></h4>
							<a class="simple-btn" href="contact.html"><i class="far fa-chevron-right"></i>Booking Now</a> 
						</div>
					</div>
				</div>
				<div class="col-xl-6 col-lg-8 lg-mb-30 single">
					<div class="deluxe__area-item"> 
						<div class="deluxe__area-item-image">
							<img class="img__full" src="assets/img/photo_6010393430800317781_y.jpg" alt=""/>
						</div>
						<div class="deluxe__area-item-content"> 
							<h6><a href="#"><span>$169</span> / Night</a></h6>
							<h4><a href="room-details.html">Single Room</a></h4>
							<a class="simple-btn" href="contact.html"><i class="far fa-chevron-right"></i>Booking Now</a> 
						</div>
					</div>
				</div>
				<div class="col-xl-6 luxury">
					<div class="deluxe__area-item"> 
						<div class="deluxe__area-item-image">
							<img class="img__full" src="assets/img/photo_6010393430800317780_y.jpg" alt=""/>
						</div>
						<div class="deluxe__area-item-content"> 
							<h6><a href="#"><span>$249</span> / Night</a></h6>
							<h4><a href="room-details.html">Luxury Room</a></h4>
							<a class="simple-btn" href="contact.html"><i class="far fa-chevron-right"></i>Booking Now</a> 
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}