export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Blogify
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to Blogify! The Purpose of blogify is to give a Boiler Plate code to our users so that they can create blog websites in few days using our template. In this Product you get access to full source code of a blog website with full integrations so you can just use this template and modify it to match your needs and launch the product faster..
            </p>

            <p>
             In this product , You will also get the documentation to start project locally.
            </p>

            {/* <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
