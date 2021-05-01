import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./directory.styles.scss";
import { selectSection } from "../../redux/directory/directorySlice";
import { SectionType } from "../../types/models";
import { ReduxState } from "../../types/reduxState";

interface Iprops {
  sections: SectionType[];
}

const Directory: React.FC<Iprops> = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} id={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector<ReduxState, Iprops>({
  sections: selectSection,
});
export default connect(mapStateToProps)(Directory);
