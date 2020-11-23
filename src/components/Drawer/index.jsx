import React, {useState} from "react"
import { Drawer, Button } from 'antd';

const DrawerBar = () => {
    const [isDrawerVisible, setIsDrawerVisible] = useState(false)

    const showDrawer = () => {
        setIsDrawerVisible(true)
    };

    const onClose = () => {
        setIsDrawerVisible(false)
    };

    return (
      <div className="site-drawer-render-in-current-wrapper">
        <div style={{ marginTop: 16 }}>
          <Button type="primary" onClick={showDrawer}>
            Open
          </Button>
        </div>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={true}
          onClose={onClose}
          visible={isDrawerVisible}
          getContainer={false}
          style={{ position: 'absolute' }}
        >
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
  }

export default DrawerBar