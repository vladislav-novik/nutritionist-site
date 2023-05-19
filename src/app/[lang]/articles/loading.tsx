import ContentLoader from 'react-content-loader'

export default function Loading({ props }: any) {
  return (
    <div className="w-full mx-auto flex justify-center">
      <ContentLoader
        speed={1}
        width={672}
        height={1000}
        viewBox="0 0 672 1000"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="0" y="18" rx="3" ry="3" width="30%" height="16" />
        <rect x="0" y="75" rx="3" ry="3" width="100%" height="26" />
        <rect x="0" y="40" rx="3" ry="3" width="100%" height="26" />
        {/* <rect x="100" y="270" rx="3" ry="3" width="20%" height="11" /> */}
        <rect x="28" y="3" rx="0" ry="0" width="0" height="1" />
        <rect x="0" y="120" rx="0" ry="0" width="100%" height="310" />
        <rect x="0" y="446" rx="3" ry="3" width="80%" height="12" />
        <rect x="0" y="472" rx="3" ry="3" width="100%" height="16" />
        <rect x="45" y="498" rx="3" ry="3" width="20%" height="8" />
        <rect x="45" y="524" rx="3" ry="3" width="20%" height="8" />
        <rect x="45" y="550" rx="3" ry="3" width="20%" height="8" />
        <rect x="0" y="576" rx="3" ry="3" width="100%" height="16" />
        <rect x="0" y="602" rx="3" ry="3" width="100%" height="16" />
        <rect x="0" y="628" rx="3" ry="3" width="100%" height="16" />
        {/* <rect x="0" y="654" rx="3" ry="3" width="100%" height="16" />
        <rect x="0" y="680" rx="3" ry="3" width="100%" height="16" />
        <rect x="0" y="706" rx="3" ry="3" width="100%" height="16" /> */}
        <rect x="20" y="654" rx="3" ry="3" width="70%" height="14" />
        <rect x="20" y="680" rx="3" ry="3" width="80%" height="14" />
        <rect x="20" y="706" rx="3" ry="3" width="75%" height="14" />
        <rect x="0" y="732" rx="3" ry="3" width="100%" height="16" />
        <rect x="0" y="758" rx="3" ry="3" width="100%" height="16" />
        <rect x="0" y="784" rx="3" ry="3" width="100%" height="16" />
        <rect x="0" y="810" rx="3" ry="3" width="100%" height="16" />
        <rect x="0" y="836" rx="3" ry="3" width="65%" height="16" />
        <circle cx="612" cy="930" r="12" />
        <circle cx="648" cy="930" r="12" />
        {/* <rect x="30" y="520" rx="3" ry="3" width="70%" height="10" />
        <rect x="0" y="558" rx="3" ry="3" width="100%" height="16" />
        
        <rect x="0" y="365" rx="3" ry="3" width="100%" height="16" />
        <rect x="0" y="324" rx="3" ry="3" width="100%" height="16" />
        <rect x="30" y="539" rx="3" ry="3" width="80%" height="10" />
        <rect x="0" y="578" rx="3" ry="3" width="80%" height="16" />
        <rect x="0" y="600" rx="3" ry="3" width="100%" height="16" />
        <rect x="0" y="630" rx="3" ry="3" width="100%" height="16" />
        <rect x="0" y="660" rx="3" ry="3" width="100%" height="16" />
        <rect x="0" y="690" rx="3" ry="3" width="100%" height="16" />
        <rect x="0" y="720" rx="3" ry="3" width="100%" height="16" />
        <rect x="0" y="750" rx="3" ry="3" width="100%" height="16" />
        <rect x="0" y="780" rx="3" ry="3" width="100%" height="16" />
        <rect x="0" y="810" rx="3" ry="3" width="100%" height="16" />
        <rect x="0" y="840" rx="3" ry="3" width="100%" height="16" />
        <rect x="0" y="870" rx="3" ry="3" width="100%" height="16" />
        <rect x="0" y="900" rx="3" ry="3" width="100%" height="16" /> */}
      </ContentLoader>
    </div>
  );
}