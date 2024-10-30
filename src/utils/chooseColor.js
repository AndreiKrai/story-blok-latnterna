const tailwindTextColorClass = (alias) => {
  switch (alias) {
    case "brandColor":
      return "text-brandColor";
    case "darkBrandColor":
      return "text-darkBrandColor";
    case "primaryTextColor":
      return "text-primaryTextColor";
    case "secondaryTextColor":
      return "text-secondaryTextColor";
    default:
      return "text-primaryTextColor";
  }
};
export { tailwindTextColorClass };
