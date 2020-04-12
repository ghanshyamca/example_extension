/* eslint-disable */

import React, { useState, useEffect } from 'react';
import ProductSelect from '../components/ProductSelect';

const Index = function Index() {
  const [cms, setcms] = useState({
    config: null,
    fieldconfig: null,
    extension: null,
  });

  useEffect(() => {
    console.log("andar")
    if (typeof window !== 'undefined') {
      try {
        // connect to ContentStack
        document.getElementsByTagName("html")[0].style.backgroundColor = "#fff";
        const { ContentstackUIExtension } = window;

        ContentstackUIExtension.init().then((ex) => {
          // make extension object globally available
          setcms({ config: ex.config, fieldconfig: ex.fieldConfig, extensionField: ex });
        });
      } catch (e) {
        ''
      }
    }
  }, []);

  return (
    <div>
      {
        (cms.fieldconfig)
        && <ProductSelect cms={cms} />
      }
    </div>
  );
};

export default Index;
