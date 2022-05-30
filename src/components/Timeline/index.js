import React from "react";

import PropTypes from "prop-types";
import { random } from "utils/random";
import Icons from "info/Icons";

import * as S from "./styled";

const Timeline = ({ data }) => {
  const iconTheme = {
    background: "#b4ebfc",
    color: "#00bcd4",
  };
  return (
    <S.TimelineWrapper className="vertical-timeline.vertical-timeline-custom-line">
      {data.map((item) => {
        const Icon = Icons[item.icon];
        return (
          <S.TimelineElement
            key={random()}
            className={`vertical-timeline-element--${item.icon.toLowerCase()}`}
            contentStyle={{
              color: `${iconTheme.color}`,
            }}
            contentArrowStyle={{ borderRight: `8px solid ${iconTheme.color}` }}
            date={item.period}
            iconStyle={{
              background: `${iconTheme.background}`,
              color: `${iconTheme.color}`,
            }}
            icon={<Icon />}
          >
            <h3 className="vertical-timeline-element-title">
              {item.institution}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {item.position}
            </h4>
            <p>{item.description}</p>
            <p>{item.location}</p>
          </S.TimelineElement>
        );
      })}
      <S.TimelineElement
        iconStyle={{
          background: iconTheme.background,
          color: iconTheme.color,
        }}
        icon={<Icons.Github />}
      />
    </S.TimelineWrapper>
  );
};

Timeline.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Timeline;
