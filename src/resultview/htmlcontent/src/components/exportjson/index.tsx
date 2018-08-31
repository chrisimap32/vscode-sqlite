import { h, Component } from 'preact';
import { IconButton} from '../iconbutton';
import { Fetch, Response } from '../fetch';
import { Service } from '../../service/service';

interface Props {
    idx?: number;
    right: boolean;
}

interface State {

}

export class ExportJson extends Component<Props, State> {
    icon = {
        dark: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><style>.icon-canvas-transparent{opacity:0;fill:#2d2d30}.icon-vs-out{fill:#2d2d30}.icon-vs-bg{fill:#c5c5c5}.icon-vs-action-blue{fill:#75beff}</style><path class="icon-canvas-transparent" d="M16 16H0V0h16v16z" id="canvas"/><path class="icon-vs-out" d="M16 8.38v2.258s-.992-.001-.997-.003c-.012.052-.003.14-.003.281v1.579c0 1.271-.37 2.185-1.054 2.746-.638.522-1.576.759-2.822.759H10v-3.247s1.014-.001 1.037-.003c.004-.046-.037-.117-.037-.214V11.08c0-.943.222-1.606.539-2.072C11.223 8.527 11 7.843 11 6.869V5.468c0-.087.102-.286.094-.325-.02-.002.063-.143.03-.143H10V2h1.124c1.251 0 2.193.265 2.832.81C14.633 3.387 15 4.3 15 5.522V7h.919L16 8.38zM9.414 4l-4-4H.586l2 2H0v4h2v.586L1.586 7H1v.586L.586 8H1v1.638L1.329 11H2v1.536c0 1.247.495 2.149 1.19 2.711.641.517 1.697.753 2.937.753H7v-3.247s-1.011-.001-1.033-.003c-.008-.053.033-.127.033-.228v-1.401c0-.962-.224-1.637-.542-2.111.256-.378.444-.89.511-1.564L9.414 4z" id="outline" style="display: none;"/><path class="icon-vs-bg" d="M15 8.38v1.258c-.697 0-1.046.426-1.046 1.278v1.579c0 .961-.223 1.625-.666 1.989-.445.364-1.166.547-2.164.547v-1.278c.383 0 .661-.092.834-.277s.26-.498.26-.94V11.08c0-1.089.349-1.771 1.046-2.044v-.027c-.697-.287-1.046-1-1.046-2.14V5.468c0-.793-.364-1.189-1.094-1.189V3c.993 0 1.714.19 2.16.571s.67 1.031.67 1.952v1.565c0 .861.349 1.292 1.046 1.292zm-9.967 4.142v-1.401c0-1.117-.351-1.816-1.053-2.099v-.027c.429-.175.71-.519.877-.995H3.049c-.173.247-.436.38-.805.38v1.258c.692 0 1.039.419 1.039 1.258v1.641c0 .934.226 1.584.677 1.948s1.174.547 2.167.547v-1.278c-.388 0-.666-.093-.838-.28-.17-.188-.256-.505-.256-.952z" id="iconBg"/><path class="icon-vs-action-blue" d="M8 4L5 7H3l2-2H1V3h4L3 1h2l3 3z" id="colorAction"/></svg>`,
        light: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><style>.icon-canvas-transparent{opacity:0;fill:#f6f6f6}.icon-vs-out{fill:#f6f6f6}.icon-vs-bg{fill:#424242}.icon-vs-action-blue{fill:#00539c}</style><path class="icon-canvas-transparent" d="M16 16H0V0h16v16z" id="canvas"/><path class="icon-vs-out" d="M16 8.38v2.258s-.992-.001-.997-.003c-.012.052-.003.14-.003.281v1.579c0 1.271-.37 2.185-1.054 2.746-.638.522-1.576.759-2.822.759H10v-3.247s1.014-.001 1.037-.003c.004-.046-.037-.117-.037-.214V11.08c0-.943.222-1.606.539-2.072C11.223 8.527 11 7.843 11 6.869V5.468c0-.087.102-.286.094-.325-.02-.002.063-.143.03-.143H10V2h1.124c1.251 0 2.193.265 2.832.81C14.633 3.387 15 4.3 15 5.522V7h.919L16 8.38zM9.414 4l-4-4H.586l2 2H0v4h2v.586L1.586 7H1v.586L.586 8H1v1.638L1.329 11H2v1.536c0 1.247.495 2.149 1.19 2.711.641.517 1.697.753 2.937.753H7v-3.247s-1.011-.001-1.033-.003c-.008-.053.033-.127.033-.228v-1.401c0-.962-.224-1.637-.542-2.111.256-.378.444-.89.511-1.564L9.414 4z" id="outline" style="display: none;"/><path class="icon-vs-bg" d="M15 8.38v1.258c-.697 0-1.046.426-1.046 1.278v1.579c0 .961-.223 1.625-.666 1.989-.445.364-1.166.547-2.164.547v-1.278c.383 0 .661-.092.834-.277s.26-.498.26-.94V11.08c0-1.089.349-1.771 1.046-2.044v-.027c-.697-.287-1.046-1-1.046-2.14V5.468c0-.793-.364-1.189-1.094-1.189V3c.993 0 1.714.19 2.16.571s.67 1.031.67 1.952v1.565c0 .861.349 1.292 1.046 1.292zm-9.967 4.142v-1.401c0-1.117-.351-1.816-1.053-2.099v-.027c.429-.175.71-.519.877-.995H3.049c-.173.247-.436.38-.805.38v1.258c.692 0 1.039.419 1.039 1.258v1.641c0 .934.226 1.584.677 1.948s1.174.547 2.167.547v-1.278c-.388 0-.666-.093-.838-.28-.17-.188-.256-.505-.256-.952z" id="iconBg"/><path class="icon-vs-action-blue" d="M8 4L5 7H3l2-2H1V3h4L3 1h2l3 3z" id="colorAction"/></svg>`
    }

    exportJson() {
        let service = Service.getInstance();
        service.request({command: this.props.idx != null? `json:resultSet/${this.props.idx}` : `json:resultSet`});
    }

    render(props: Props, state: State) {
        return (
            <Fetch resource={this.props.idx != null? `resultSet/${props.idx}/rows/length` : `resultSet/length`}>
            {
                (response: Response) => (
                    <IconButton title={`Export json`} icon={this.icon} ready={!response.loading} onclick={this.exportJson.bind(this)}/>
                )
            }
            </Fetch>
        );
    }
}