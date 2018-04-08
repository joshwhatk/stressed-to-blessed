import React from 'react';
import graphql from 'graphql';
import Content, { HTMLContent } from '../components/Content';
import backgroundImage from '../assets/images/about/happy-kid-picture.jpeg';

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  let backgroundCss = {
    backgroundImage: "url(" + backgroundImage + ")",
  };

  return (
    <React.Fragment>
      <header id="about-header">
        <div className="Hero Hero--about">
          <div className="Hero-background" style={backgroundCss}></div>
        </div>
      </header>
      <section id="content">
        <div className="text-container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">{title}</h2>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (<AboutPageTemplate
    contentComponent={HTMLContent}
    title={post.frontmatter.title}
    content={post.html}
  />);
};

export const aboutPageQuery = graphql`
  query AboutPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
