export default function Navbar(){
    
    return(
        <>
       
       <div class="header__sticky">
		<div class="header__area">
			<div class="container custom__container">
				<div class="header__area-menubar">
					<div class="header__area-menubar-left">
						<div class="header__area-menubar-left-logo">
							<a href="index.html"><img src="assets/img/logo.png" alt="" /></a>
							<div class="responsive-menu"></div>
						</div>
					</div>
					<div class="header__area-menubar-right">
						<div class="header__area-menubar-right-menu menu-responsive">						
							<ul id="mobilemenu">
								<li class="menu-item-has-children"><a href="#">Home</a>
									
								</li>
								<li class="menu-item-has-children"><a href="#">Pages</a>
									<ul class="sub-menu">
										<li><a href="about.html">About</a></li>
										<li><a href="services-team.html">Team</a></li>
										<li><a href="services-details.html">Services Details</a></li>
										<li><a href="coming-soon.html">Coming Soon</a></li>
									</ul>
								</li>
								<li class="menu-item-has-children"><a href="#">Room</a>
									<ul class="sub-menu">
										<li><a href="room-style.html">Ground Floor</a></li>
										<li><a href="room-modern.html">First Floor</a></li>
										<li><a href="room-list.html">Second Floor</a></li>
										
									</ul>
								</li>
								
								<li><a href="contact.html">Contact</a></li>
							</ul>
						</div>
					</div>
					<div class="header__area-menubar-right-box">
						<div class="header__area-menubar-right-box-btn">
							<a class="theme-btn" href="contact.html">Book Now<i class="fal fa-long-arrow-right"></i></a>
	
						</div>
						<div class="header__area-menubar-right-box">
						<div class="header__area-menubar-right-box-btn">
							<a class="theme-btn" href="contact.html">Login<i class="fal fa-long-arrow-right"></i></a>
						</div>
					</div>
					</div>
				</div>
			</div>
		</div>
	</div>
        
        </>
    )
}