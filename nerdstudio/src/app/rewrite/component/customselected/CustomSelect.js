// components/CustomSelect.js
import React, { useState, useEffect } from "react";
import { Select, Input } from "antd";
import { IoIosCheckmark } from "react-icons/io";
import styles from "./CustomSelect.module.css";
import { IoMdSearch } from "react-icons/io";
const { Option } = Select;

const CustomSelect = ({ options,checkmark=true, ...props }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedValue, setSelectedValue] = useState(props.value);

  // Set default value to the first option if value is undefined
  useEffect(() => {
    if (props.value === undefined && options.length > 0) {
      setSelectedValue(options[0].value);
    }
  }, [props.value, options]);

  const handleSearch = (value) => {
    setSearchTerm(value);
    setFilteredOptions(
      options.filter((option) =>
        option.label.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <Select
      className="w-full"
      {...props}
      variant="filled"
      defaultValue={(props.value === undefined && options.length > 0?options[0].value:props.value)}
      filterOption={false} // Disable default filtering
      onChange={(value) => setSelectedValue(value)}
      dropdownRender={(menu) => (
        <div>
          <Input
            variant="filled"
            size="large"
            prefix={<IoMdSearch className="text-secondary" />}
            placeholder="Search..."
            onChange={(e) => handleSearch(e.target.value)}
            style={{ marginBottom: 8, padding: 8 }}
          />
          <div>{menu}</div>
        </div>
      )}
    >
      {filteredOptions.map((option) => {
        const IconComponent = option.icon;
        return (
          <Option
            key={option.value}
            value={option.value}
            className={styles.customOption}
            
          >
            <div className={styles.optionContent}>
              {IconComponent && (
                <IconComponent className={`mr-2 text-gray-600  text-icon  ${(option.class?option.class:'')}`} />
              )}
              <span>{option.label}</span>

              {selectedValue === option.value && checkmark && (
                <IoIosCheckmark className={' CustomSelectCheckMark '+styles.customCheckmark} />
              )}
            </div>
          </Option>
        );
      })}
    </Select>
  );
};

export default CustomSelect;
