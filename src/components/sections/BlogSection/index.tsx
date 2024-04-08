import React from 'react';
import styles from './styles.module.css';

// https://dev.to/themesberg/how-to-create-a-blog-post-carousel-using-bootstrap-5-48on
const BlogSection = () => {
  return (
    <>
			<section className="">

				<div className="container my-5">
					<div className="row d-flex justify-content-center">
							<div className="col-12">
								<div id="carousel" className="carousel slide" data-ride="carousel">
										<ol className="carousel-indicators" style={{bottom: '-60px;'}}>
												<li data-target="#carousel" data-slide-to="0" className="active bg-indicators"></li>
												<li data-target="#carousel" data-slide-to="1" className="bg-indicators"></li>
												<li data-target="#carousel" data-slide-to="2" className="bg-indicators"></li>
											</ol>
										<div className="carousel-inner">
											<div className="carousel-item active">
												<div className="row">
														<div className="col-12 col-md-6 col-xl-3 mb-4">
																<div className="card mr-3">
																		<img src="https://themesberg.s3.us-east-2.amazonaws.com/public/posts/bootstrap-themes-summer-sale.jpg" class="card-img-top" alt="..."></img>
																		<div className="card-body">
																			<h5 className="card-title">35% discount for premium Bootstrap Themes, Templates, UI Kits</h5>
																			<p className="card-text">We’re getting nearer to the end of summer and because we know that this period can make a serious dent in your pocket..</p>
																			<a href="#" className="btn btn-primary">Read more</a>
																		</div>
																</div>
														</div>
														<div className="col-12 col-md-6 col-xl-3 mb-4">
																<div className="card mr-3">
																		<img src="https://themesberg.s3.us-east-2.amazonaws.com/public/posts/gpt-3-tailwind-css-code-generator.jpg" class="card-img-top" alt="..."></img>
																		<div className="card-body">
																			<h5 className="card-title">We built an OpenAI powered Tailwind CSS code generator using GPT-3</h5>
																			<p className="card-text">A couple of days ago we got access to the OpenAI’s Beta API platform and I had the occasion to play around with it...</p>
																			<a href="#" className="btn btn-primary">Read more</a>
																		</div>
																</div>
														</div>
														<div className="col-12 col-md-6 col-xl-3 mb-4">
																<div className="card mr-3">
																		<img src="https://themesberg.s3.us-east-2.amazonaws.com/public/posts/bootstrap-5-tutorial/bootstrap-5-tutorial.jpg" className="card-img-top" alt="..."></img>
																		<div className="card-body">
																			<h5 className="card-title">Bootstrap 5 tutorial: learn how to get started without jQuery</h5>
																			<p className="card-text">We’re getting nearer to the end of summer and because we know that this period can make a serious dent in your pocket..</p>
																			<a href="#" className="btn btn-primary">Read more</a>
																		</div>
																</div>
														</div>
														<div className="col-12 col-md-6 col-xl-3 mb-4">
																<div className="card mr-3">
																		<img src="https://themesberg.s3.us-east-2.amazonaws.com/public/posts/angular-10/angular-10-officially-released-dropping-ie-9-10.jpg" className="card-img-top" alt="..."></img>
																		<div className="card-body">
																			<h5 className="card-title">Angular 10 officially released deprecating support for IE 9 and 10</h5>
																			<p className="card-text">If you’ve been using Angular for your web projects I’m glad to let you know that following this major update to version...</p>
																			<a href="#" className="btn btn-primary">Read more</a>
																		</div>
																</div>
														</div>
												</div>
											</div>
											<div className="carousel-item">
												<div className="row">
														<div className="col-12 col-md-6 col-xl-3 mb-4">
																<div className="card mr-3">
																		<img src="https://themesberg.s3.us-east-2.amazonaws.com/public/posts/bootstrap-themes-summer-sale.jpg" className="card-img-top" alt="..."></img>
																		<div className="card-body">
																			<h5 className="card-title">35% discount for premium Bootstrap Themes, Templates, UI Kits</h5>
																			<p className="card-text">We’re getting nearer to the end of summer and because we know that this period can make a serious dent in your pocket..</p>
																			<a href="#" className="btn btn-primary">Read more</a>
																		</div>
																</div>
														</div>
														<div className="col-12 col-md-6 col-xl-3 mb-4">
																<div className="card mr-3">
																		<img src="https://themesberg.s3.us-east-2.amazonaws.com/public/posts/gpt-3-tailwind-css-code-generator.jpg" className="card-img-top" alt="..."></img>
																		<div className="card-body">
																			<h5 className="card-title">We built an OpenAI powered Tailwind CSS code generator using GPT-3</h5>
																			<p className="card-text">A couple of days ago we got access to the OpenAI’s Beta API platform and I had the occasion to play around with it...</p>
																			<a href="#" className="btn btn-primary">Read more</a>
																		</div>
																</div>
														</div>
														<div className="col-12 col-md-6 col-xl-3 mb-4">
																<div className="card mr-3">
																		<img src="https://themesberg.s3.us-east-2.amazonaws.com/public/posts/bootstrap-5-tutorial/bootstrap-5-tutorial.jpg" className="card-img-top" alt="..."></img>
																		<div className="card-body">
																			<h5 className="card-title">Bootstrap 5 tutorial: learn how to get started without jQuery</h5>
																			<p className="card-text">We’re getting nearer to the end of summer and because we know that this period can make a serious dent in your pocket..</p>
																			<a href="#" className="btn btn-primary">Read more</a>
																		</div>
																</div>
														</div>
														<div className="col-12 col-md-6 col-xl-3 mb-4">
																<div className="card mr-3">
																		<img src="https://themesberg.s3.us-east-2.amazonaws.com/public/posts/angular-10/angular-10-officially-released-dropping-ie-9-10.jpg" className="card-img-top" alt="..."></img>
																		<div className="card-body">
																			<h5 className="card-title">Angular 10 officially released deprecating support for IE 9 and 10</h5>
																			<p className="card-text">If you’ve been using Angular for your web projects I’m glad to let you know that following this major update to version...</p>
																			<a href="#" className="btn btn-primary">Read more</a>
																		</div>
																</div>
														</div>
												</div>
											</div>
											<div className="carousel-item">
												<div className="row">
														<div className="col-12 col-md-6 col-xl-3 mb-4">
																<div className="card mr-3">
																		<img src="https://themesberg.s3.us-east-2.amazonaws.com/public/posts/bootstrap-themes-summer-sale.jpg" className="card-img-top" alt="..."></img>
																		<div className="card-body">
																			<h5 className="card-title">35% discount for premium Bootstrap Themes, Templates, UI Kits</h5>
																			<p className="card-text">We’re getting nearer to the end of summer and because we know that this period can make a serious dent in your pocket..</p>
																			<a href="#" className="btn btn-primary">Read more</a>
																		</div>
																</div>
														</div>
														<div className="col-12 col-md-6 col-xl-3 mb-4">
																<div className="card mr-3">
																		<img src="https://themesberg.s3.us-east-2.amazonaws.com/public/posts/gpt-3-tailwind-css-code-generator.jpg" className="card-img-top" alt="..."></img>
																		<div className="card-body">
																			<h5 className="card-title">We built an OpenAI powered Tailwind CSS code generator using GPT-3</h5>
																			<p className="card-text">A couple of days ago we got access to the OpenAI’s Beta API platform and I had the occasion to play around with it...</p>
																			<a href="#" className="btn btn-primary">Read more</a>
																		</div>
																</div>
														</div>
														<div className="col-12 col-md-6 col-xl-3 mb-4">
																<div className="card mr-3">
																		<img src="https://themesberg.s3.us-east-2.amazonaws.com/public/posts/bootstrap-5-tutorial/bootstrap-5-tutorial.jpg" className="card-img-top" alt="..."></img>
																		<div className="card-body">
																			<h5 className="card-title">Bootstrap 5 tutorial: learn how to get started without jQuery</h5>
																			<p className="card-text">We’re getting nearer to the end of summer and because we know that this period can make a serious dent in your pocket..</p>
																			<a href="#" className="btn btn-primary">Read more</a>
																		</div>
																</div>
														</div>
														<div className="col-12 col-md-6 col-xl-3 mb-4">
																<div className="card mr-3">
																		<img src="https://themesberg.s3.us-east-2.amazonaws.com/public/posts/angular-10/angular-10-officially-released-dropping-ie-9-10.jpg" className="card-img-top" alt="..."></img>
																		<div className="card-body">
																			<h5 className="card-title">Angular 10 officially released deprecating support for IE 9 and 10</h5>
																			<p className="card-text">If you’ve been using Angular for your web projects I’m glad to let you know that following this major update to version...</p>
																			<a href="#" className="btn btn-primary">Read more</a>
																		</div>
																</div>
														</div>
												</div>
											</div>
										</div>
									</div>
							</div>
					</div>
				</div>

			</section>
    </>
  );
};

export default BlogSection;