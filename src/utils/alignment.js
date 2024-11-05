const justifyContent = (alias) => {
    switch (alias) {
      case "justify-start":
        return "flex-start";
      case "justify-end":
        return "flex-end";
      case "justify-between":
        return "space-between";
      case "justify-around":
        return "space-around";
        case "justify-center":
          return "center";
      default:
        return "center";
    }
  };
  export { justifyContent };

  

  