import NextNProgress from "nextjs-progressbar";

const NProgress = () => {
  return (
    <NextNProgress
      color="#464646"
      startPosition={0.3}
      stopDelayMs={300}
      height={2}
      showOnShallow={true}
      options={{ showSpinner: false }}
    />
  );
};

export default NProgress;
