let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');


chai.should();

chai.use(chaiHttp);

describe('Tasks API', () => {

    describe("GET /customers", () =>{
        it("It should GET all the tasks", (done) => {
            chai.request(server)
                .get('/customers')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                })
        })
    })
});