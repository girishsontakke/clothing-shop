import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { SectionType } from "../../types/models";
import "./menu-item.styles.scss";

interface Iprops extends RouteComponentProps, SectionType {
  size?: string;
}

const MenuItem: React.FC<Iprops> = ({
  title,
  imageUrl,
  size,
  linkUrl,
  match,
  history,
}) => {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
