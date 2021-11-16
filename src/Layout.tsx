import React from "react";

export default ({ children, style }) => {
  const memoizedStyle = React.useMemo(() => {
    return {
      padding: "2em",
      ...style,
    };
  }, [style]);

  return <div style={memoizedStyle}>{children}</div>;
};
