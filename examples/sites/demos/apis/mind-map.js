export default {
  mode: ['pc'],
  apis: [
    {
      name: 'mind-map',
      type: 'component',
      props: [
        {
          name: 'modelValue',
          type: 'Object',
          defaultValue: '{}',
          desc: {
            'zh-CN': '默认节点数据',
            'en-US': 'Default node data'
          },
          mode: ['pc'],
          pcDemo: 'export-data'
        },
        {
          name: 'options',
          typeAnchorName: 'IMindMaoOptions',
          type: 'IMindMaoOptions',
          defaultValue: '{contextMenu: false,toolBar: false,nodeMenu: false}',
          desc: {
            'zh-CN': '配置项',
            'en-US': 'options'
          },
          mode: ['pc'],
          pcDemo: 'export-data'
        }
      ],
      events: [
        {
          name: 'afterImport',
          type: '({render, data}: {render:MindElixirInstance, data: })=>void',
          desc: {
            'zh-CN': 'v-model更新后会触发',
            'en-US': 'After updating the v-model, it will trigger'
          },
          mode: ['pc']
        },
        {
          name: 'beforeImport',
          type: '({render, data}: {render:MindElixirInstance, data: })=>void',
          desc: {
            'zh-CN': 'v-model更新前会触发',
            'en-US': 'Triggered before updating the v-model'
          },
          mode: ['pc']
        },
        {
          name: 'create',
          type: '(render:MindElixirInstance)=>void',
          desc: {
            'zh-CN': 'mindmap创建时会触发该事件',
            'en-US': 'This event will be triggered when creating mindmap'
          },
          mode: ['pc']
        },
        {
          name: 'expandNode',
          typeAnchorName: 'IMindExpandNode',
          type: 'IMindnExpandNode',
          desc: {
            'zh-CN': '展开节点时会触发该事件',
            'en-US': 'This event will be triggered when expanding a node'
          },
          mode: ['pc']
        },
        {
          name: 'operation',
          typeAnchorName: 'IMindMapOperation',
          type: 'IMindMapOperation',
          desc: {
            'zh-CN': '节点重新计算时, 例如将节点A拖拽到节点B, 使得节点A是节点B的子节点',
            'en-US':
              'When recalculating nodes, for example, dragging node A to node B so that node A is a child node of node B'
          },
          mode: ['pc']
        },
        {
          name: 'selectNewNode',
          typeAnchorName: 'IMindMapSelectNewNode',
          type: 'IMindMapSelectNewNode',
          desc: {
            'zh-CN': '创建新节点时',
            'en-US': 'when create new node'
          },
          mode: ['pc']
        },
        {
          name: 'selectNode',
          typeAnchorName: 'IMindMapSelectNode',
          type: 'IMindMapSelectNode',
          desc: {
            'zh-CN': '选择任意一个节点时, 会触发该事件',
            'en-US': 'When selecting any node, this event will be triggered'
          },
          mode: ['pc']
        },
        {
          name: 'selectNodes',
          typeAnchorName: 'IMindMapSelectNodes',
          type: 'IMindMapSelectNodes',
          desc: {
            'zh-CN': '选择多个节点的时候会触发该事件',
            'en-US': 'When selecting multiple nodes, this event will be triggered'
          },
          mode: ['pc']
        },
        {
          name: 'unselectNode',
          typeAnchorName: 'IMindMapUnselectNode',
          type: 'IMindMapUnselectNode',
          desc: {
            'zh-CN': '取消选择的时候会触发该事件',
            'en-US': 'When deselecting, this event will be triggered'
          },
          mode: ['pc']
        },
        {
          name: 'unselectNodes',
          typeAnchorName: 'IMindMapUnselectNodes',
          type: 'IMindMapUnselectNodes',
          desc: {
            'zh-CN': '取消选择多个节点时会触发该事件',
            'en-US': 'This event will be triggered when multiple nodes are unselected'
          },
          mode: ['pc']
        }
      ],
      methods: [],
      slots: []
    }
  ],
  types: [
    {
      name: 'IMindMaoOptions',
      type: 'interface',
      code: `
interface options {
  direction?: number
  locale?: string
  draggable?: boolean
  editable?: boolean
  contextMenu?: boolean
  contextMenuOption?: any
  toolBar?: boolean
  keypress?: boolean
  mouseSelectionButton?: 0 | 2
  before?: Before
  newTopicName?: string
  allowUndo?: boolean
  overflowHidden?: boolean
  mainLinkStyle?: number
  subLinkStyle?: number
  mobileMenu?: boolean
  theme?: Theme
  nodeMenu?: boolean
}
`
    },
    {
      name: 'IMindMapOperation',
      type: 'type',
      code: `type onOperation = ({render, info}: {render:MindElixirInstance, info: Operation}) => void`
    },
    {
      name: 'IMindMapSelectNode',
      type: 'type',
      code: `type onSelectNode = ({render,nodeObj}: {render:MindElixirInstance,nodeObj:NodeObj}, e?: MouseEvent) => void`
    },
    {
      name: 'IMindMapSelectNewNode',
      type: 'type',
      code: `type selectNewNode: ({render,nodeObj}: {render:MindElixirInstance,nodeObj:NodeObj}) => void`
    },
    {
      name: 'IMindMapSelectNodes',
      type: 'type',
      code: `type selectNodes: ({render,nodeObj}: {render:MindElixirInstance,nodeObj:NodeObj[]}) => void`
    },
    {
      name: 'IMindMapUnselectNode',
      type: 'type',
      code: `type unselectNodes: ({render}: {render: MindElixirInstance}) => void`
    },
    {
      name: 'IMindMapUnselectNodes',
      type: 'type',
      code: `type unselectNodes: ({render}: {render: MindElixirInstance}) => void`
    },
    {
      name: 'IMindExpandNode',
      type: 'type',
      code: `type expandNode: ({render,nodeObj}: {render:MindElixirInstance,nodeObj:NodeObj}) => void`
    },
    {
      name: 'NodeObj',
      type: 'interface',
      code: `
export interface NodeObj {
  topic: string
  id: Uid
  style?: {
    fontSize?: string
    color?: string
    background?: string
    fontWeight?: string
  }
  children?: NodeObj[]
  tags?: string[]
  icons?: string[]
  hyperLink?: string
  expanded?: boolean
  direction?: number
  root?: boolean
  image?: {
    url: string
    width: number
    height: number
  }
  branchColor?: string
  parent?: NodeObj
}
`
    }
  ]
}
