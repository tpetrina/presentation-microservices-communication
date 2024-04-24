import React from "react";

export default ({ children, style, color, layoutStyle }) => {
  const memoizedStyle = React.useMemo(() => {
    return {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 2,
      height: "100%",
      width: "100%",
      backgroundColor: color,
      padding: "2em",
      ...layoutStyle,
    };
  }, [layoutStyle]);

  const memoizedSubStyle = React.useMemo(() => {
    return {
      ...style,
    };
  }, [style]);

  return (
    <div style={memoizedStyle}>
      <section style={memoizedSubStyle}>{children}</section>
    </div>
  );
};
