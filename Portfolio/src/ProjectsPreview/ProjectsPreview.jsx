import "./projects-preview.scss"

export default function ProjectsPreview() {
  return (
    <>
      <section className="projects-section">
        <h2 className="projects">Projects</h2>
        <div className="container-fluid">
          <div className="row">
            <div
              className="box border m-0 p-0 col-4 bg-secondary"
              style={{ height: "250px" }}
            >
              box 1 section 1
            </div>
            <div
              className="box border m-0 p-0 col-4 bg-secondary"
              style={{ height: "250px" }}
            >
              box 2 section 1
            </div>
            <div
              className="box border m-0 p-0 col-4 bg-secondary"
              style={{ height: "250px" }}
            >
              box 3 section 1
            </div>
            <div
              className="box border m-0 p-0 col-4 bg-secondary"
              style={{ height: "250px" }}
            >
              box 4 section 1
            </div>
            <div
              className="box border m-0 p-0 col-4 bg-secondary"
              style={{ height: "250px" }}
            >
              box 5 section 1
            </div>
            <div
              className="box border m-0 p-0 col-4 bg-secondary"
              style={{ height: "250px" }}
            >
              box 6 section 1
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
