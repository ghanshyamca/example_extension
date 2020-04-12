/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const Product = function Product(cmsconfig) {

  const { extensionField } = cmsconfig.cms;
  console.log("cmsconfig",cmsconfig);
  const [filterdata, setFilterdata] = useState([]);
  const [list, setlist] = useState([]);
  const [selectedvalue, setValue] = useState(null);
  const [showList, setShowList] = useState(false);

  const handleChange = async (e) => {

    setShowList(true);

    let newList = [];
    extensionField.window.updateHeight(220);
    if (e.target.value !== '') {
      let value = e.target.value;
      newList = list.filter(e => e.name.toLowerCase().indexOf(value.toLowerCase()) !== -1)
    } else {
      extensionField.window.updateHeight(50);
      setShowList(false);
      newList = [];
    }
    // Set the filtered state based on what our rules added to newList
    setFilterdata(newList);
  };

  const getFieldValue = () => extensionField.field.getData();

  const setFieldValue = (data) => {
    extensionField.field.setData(data);
  };

  const selectHandler = (product) => {
    const skudata = {
      id: product.id,
      name: product.name,
      type: product.type,
      slug: product.slug,
      images: product.images,
      brand: product.brand || '',
    };
    extensionField.window.updateHeight(50);
    setFieldValue(skudata);
    setValue(skudata);
  };

  useEffect(async() => {

    if (extensionField) {
      const value = getFieldValue();
      if (value && value.id !== undefined) {
        setValue(value);
        extensionField.window.updateHeight(50);
      } else {
        setValue(null);
      }
    }

    const fetchUrl = `${publicRuntimeConfig.API_BASE_URL}extension/list/${extensionField.fieldConfig.type}`;
    const productData = await fetch(fetchUrl)
      .then((r) => r.json())
      .then((data) => data)
      .catch((err) => {
      });
      if (productData !== undefined)
        setlist(productData);
  }, []);

  const clearSelectedValue = () => {
    setShowList(false);
    setValue(null);
    setFieldValue(null);
  };

  return (
    <div>
      {
        (selectedvalue !== null)
        && (
        <div className='cs-table'>
          <div className={`table-row ${styles.tableSelectRow}`}>
            <div className={`table-cell w-5 ${styles.tableSelectCell}`}>{(selectedvalue.image !== 'undefined' || selectedvalue.images.length == 0 ? <img src="./../../brand-placeholder.png" width='30' height='30' alt="placeholder" /> : <img src={selectedvalue.images.url} alt="brand" />)}</div>
            <div className={`table-cell w-80 ${styles.tableSelectCell}`}><span>{selectedvalue.name} ( {selectedvalue.type == 'products' ? selectedvalue.brand : selectedvalue.id} ) <i className={styles.closeIcon} onClick={() => clearSelectedValue()}>X</i></span></div>
          </div>
        </div>
        )
      }
      {
        (selectedvalue === null)
        && (
          <div>
            <input className={`cs-text-box w-100 ${styles.csTextBox}`} type="text" onChange={(e) => handleChange(e)} placeholder={extensionField.field.schema.field_metadata.instruction} />
            {
              showList
              ? (
                <>
                  <ul className={`cs-table ${styles.dropdownList}`}>
                    {
                    filterdata.map((list) => (
                      <li className={`table-row ${styles.tableRow}`} key={list.name} onClick={() => selectHandler(list)}>
                          <div className={`table-cell w-5 ${styles.tableCell}`}>{(list.images && list.images.length == 0 ? <img src="./../../brand-placeholder.png" width='30' height='30' alt="placeholder" /> : <img src={list.images.url} alt="brand" />)}</div>
                          <div className='table-cell w-90'><span>{list.name} ( {list.type == 'products' ? list.brand : list.id} )</span></div>
                      </li>
                    ))
                    }
                  </ul>
                  {
                    (extensionField.fieldConfig.branding && extensionField.fieldConfig.branding === "true")
                    && (
                      <div className={styles.branding}>© 2020 Raw Engineering India Pvt Ltd. All rights reserved</div>
                    )
                  }
                </>
              )
              : (
                ''
              )
            }
          </div>
        )
      }
    </div>
  );
};

export default Product;
