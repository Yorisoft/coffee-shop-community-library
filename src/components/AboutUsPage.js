import React from "react";
import { Jumbotron } from "react-bootstrap";

function AboutPage() {
  return (
    <>
      <div className="jumbotron" style={{ height: "55rem", marginTop: "50px" }}>
        <h1 style={{ paddingLeft: "7rem" }}> Our Story </h1>
        <Jumbotron
          style={{ float: "right", textAlign: "right", width: "70rem" }}
        >
          <h5>
            {" "}
            Consequat semper viverra nam libero justo laoreet sit amet. Velit
            dignissim sodales ut eu sem integer vitae justo. Sed blandit libero
            volutpat sed cras ornare arcu. Mattis vulputate enim nulla aliquet
            porttitor lacus. In mollis nunc sed id semper risus in hendrerit
            gravida. Ullamcorper a lacus vestibulum sed arcu non odio. Sed
            libero enim sed faucibus turpis in. Ut tortor pretium viverra
            suspendisse potenti nullam ac tortor vitae. <br />
            <br />
            <br />
            Adipiscing bibendum est ultricies integer. Eget arcu dictum varius
            duis at consectetur. Faucibus a pellentesque sit amet porttitor eget
            dolor. Non nisi est sit amet facilisis magna etiam. Purus sit amet
            volutpat consequat mauris nunc. Eget velit aliquet sagittis id
            consectetur. <br />
            <br />
            <br /> Arcu risus quis varius quam quisque id diam vel quam. Mauris
            commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
            Tristique magna sit amet purus gravida. Adipiscing vitae proin
            sagittis nisl rhoncus mattis. Ante in nibh mauris cursus mattis
            molestie. Adipiscing vitae proin sagittis nisl rhoncus mattis
            rhoncus. Nam at lectus urna duis convallis.
            <br />
            <br />
            <br /> Vitae tempus quam pellentesque nec nam aliquam. Tincidunt
            nunc pulvinar sapien et ligula ullamcorper malesuada. Odio eu
            feugiat pretium nibh ipsum consequat. Sed adipiscing diam donec
            adipiscing tristique risus nec feugiat. Pretium nibh ipsum consequat
            nisl vel pretium lectus quam id.{" "}
          </h5>
        </Jumbotron>
      </div>
    </>
  );
}

export default AboutPage;
