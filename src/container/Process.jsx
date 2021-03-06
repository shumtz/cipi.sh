const Process = () => (
  <div className="lg:container lg:mx-auto px-4 py-10 items-center">
    <h3 className="text-3xl text-black text-center font-bold mb-2">
      How Does It Work
    </h3>
    <p className="text-center mb-5 text-gray text-lg">
      You&apos;re only a few simple steps away
    </p>
    <div className="lg:grid lg:grid-cols-3">
      <div className="m-5">
        <img className="mx-auto" src="monitor-loading-progress.svg" width="200px" alt="Computer" />
        <div className="hidden lg:block lg:relative -top-1/4 -right-3/6">
          <img src="line-with-arrow.svg" alt="Arrow" />
        </div>
        <h5 className="flex text-xl items-center font-bold mb-2">
          <span className="flex justify-center px-5 py-2 mr-2 py-0 bg-grayWhite font-bold text-purple text-center rounded-full">1</span>
          {" "}
          Install
        </h5>
        <p className="text-grayBlack font-medium">
          Install Cipi on your server running
          <br />
          <a href="https://cipi.sh/#" className="text-blue hover:underline">wget -O - https://cipi.sh/go.sh | bash</a>
          <br />
          in a fresh installation of Ubuntu 20.04.
        </p>
      </div>
      <div className="m-5">
        <img className="mx-auto" src="monitor-loading-progress.svg" width="200px" alt="Computer" />
        <div className="hidden lg:block relative -top-1/4 -right-3/6">
          <img src="line-with-arrow.svg" alt="Arrow" />
        </div>
        <h5 className="flex text-xl items-center font-bold mb-2">
          <span className="flex justify-center px-5 py-2 mr-2 py-0 bg-grayWhite font-bold text-purple text-center rounded-full">2</span>
          {" "}
          Manage
        </h5>
        <p className="text-grayBlack font-medium">
          Use the amazing Cipi UI to manage the settings of your sites
          (alias domains, Git repo, PHP-FPM version, SSL certs, etc...)
        </p>
      </div>
      <div className="m-5">
        <img className="mx-auto" src="monitor-loading-progress.svg" width="200px" alt="Computer" />
        <div className="mt-3" />
        <h5 className="flex text-xl items-center font-bold mb-2">
          <span className="flex justify-center px-5 py-2 mr-2 py-0 bg-grayWhite font-bold text-purple text-center rounded-full">3</span>
          {" "}
          Deploy
        </h5>
        <p className="text-grayBlack font-medium">
          Deploy amazing projects on a powerful LEMP stack build for your websites,
          web-apps and e-commerce.
        </p>
      </div>
    </div>
  </div>
);

export default Process;
