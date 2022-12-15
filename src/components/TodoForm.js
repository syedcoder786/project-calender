import React from 'react';
import {
    // Collapse,
    // Navbar,
    // NavbarToggler,
    // NavbarBrand,
    // Nav,
    // NavItem,
    // NavLink,
    Input,
    Form
} from 'reactstrap'
function TodoForm(props) {
    return (
        <div>
            <Form inline class="form-inline my-2 my-lg-0">
              <Input type="time" className="form-control mr-sm-2"/>
              <Input type="search" className="form-control mr-sm-2" placeholder="Todo"/>
              {/* <Button variant="outline-success">Search</Button> */}
            </Form>

        </div>
    );
}

export default TodoForm;