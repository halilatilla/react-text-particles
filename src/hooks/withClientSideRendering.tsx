import React, {
  useEffect,
  useState,
  ComponentType,
  PropsWithChildren,
} from 'react';

function withClientSideRendering<P extends object>(
  WrappedComponent: ComponentType<P>
) {
  return (props: PropsWithChildren<P>) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(typeof window !== 'undefined');
    }, []);

    if (!isClient) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withClientSideRendering;
