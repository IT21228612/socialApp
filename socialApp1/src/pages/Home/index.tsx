import preactLogo from '../../assets/preact.svg';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export function Home() {
	return (
		<div>
		<header id="home-header" class="masthead  text-white">
      <div class="masthead-content">
          <div class="container">
              <h1 id="txt1" class="masthead-heading mb-0">tFG Social </h1>
			
              <h2 id="txt1" class="masthead-subheading mb-0">"Connect, engage, belong. Welcome to your digital home."</h2>
             
          </div>
      </div>
     
	</header> 

  <section>
      <div class="container">
          <div class="row align-items-center">
              <div class="col-lg-6 order-lg-2">
                  <div class="p-5">
                      <img class="img-fluid rounded-circle" src="https://neliosoftware.com/wp-content/uploads/2018/07/social-influencers.png" alt="gosnippets"/>
                  </div>
              </div>
              <div class="col-lg-6 order-lg-1">
                  <div class="p-5">
                      <h2 class="display-4">Discover, connect, thrive....</h2>
                      <p> Explore, connect, and flourish together in our vibrant community. 
						  Join us on a journey of discovery and meaningful connections that empower you to thrive..</p>
                  </div>
              </div>
          </div>
      </div>
  </section>

  <section>
      <div class="container">
          <div class="row align-items-center">
              <div class="col-lg-6">
                  <div class="p-5">
                      <img class="img-fluid rounded-circle" src="https://thumbs.dreamstime.com/z/interact-communicate-connect-social-media-social-networking-conc-concept-67245351.jpg" alt="gosnippets"/>
                  </div>
              </div>
              <div class="col-lg-6">
                  <div class="p-5">
                      <h2 class="display-4">Create, share, belong...</h2>
                      <p>Craft, express, belong. Join us to create, share,
						   and belong in a community that celebrates your unique voice</p>
                  </div>
              </div>
          </div>
      </div>
  </section>

  <section>
      <div class="container">
          <div class="row align-items-center">
              <div class="col-lg-6 order-lg-2">
                  <div class="p-5">
                      <img class="img-fluid rounded-circle" src="https://www.verywellfamily.com/thmb/j5mPfpYtCIUqtRZ1yYXKuQx841w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/making-and-keeping-friends-2633627_V22-bc3bfa39346b412cb05970063535e69b.png" alt="gosnippets"/>
                  </div>
              </div>
              <div class="col-lg-6 order-lg-1">
                  <div class="p-5">
                      <h2 class="display-4">Where friendships grow and stories unfold...</h2>
                      <p>Discover a space where friendships blossom and stories come to life. 
						  Join us to witness the magic of growing connections and unfolding narratives..</p>
                  </div>
              </div>
          </div>
      </div>
  </section>
  </div>

	);
}

function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}
