"use client";

import React, { ChangeEvent, useState } from "react";
import {
  Avatar,
  Breadcrumb,
  Button,
  Checkbox,
  EvaluationStar,
  Heading,
  Icon,
  IconButton,
  Loading,
  Modal,
  NotificationInline,
  Pagination,
  PaginationSelect,
  Radio,
  Search,
  Select,
  SelectOption,
  Tab,
  Tag,
  TextArea,
  TextInput,
  useToast,
  Toggle,
  Tooltip,
} from "@zenkigen-inc/component-ui";

export default function SamplesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioSelected, setRadioSelected] = useState("");
  const [toggleEnabled, setToggleEnabled] = useState(false);
  const [textInputValue, setTextInputValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setPagination] = useState(1);
  const [selectedTab, setSelectedTab] = useState("tab1");
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(null);

  const { addToast } = useToast();

  const handleSelectChange = (option: SelectOption | null) => {
    setSelectedOption(option);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-12 bg-white text-black">

      <div className="text-center mb-12">
        <Heading level={1}>@zenkigen-inc/component-ui デモページ</Heading>
        <p className="mt-4 text-gray-600">すべてのコンポーネントを配置したデモページです</p>
      </div>

      {/* Buttons & Icons Section */}
      <section className="space-y-6">
        <Heading level={2}>ボタン・アイコン</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold">Button</h3>
            <div className="space-y-2">
              <Button variant="fill" size="small">Small Fill</Button>
              <Button variant="outline" size="medium">Medium Outline</Button>
              <Button variant="text" size="large">Large Text</Button>
              <Button variant="fillDanger" isDisabled>Disabled</Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">IconButton</h3>
            <div className="flex gap-2">
              <IconButton icon="add" size="small" />
              <IconButton icon="edit" size="medium" variant="outline" />
              <IconButton icon="delete" size="large" isDisabled />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Icon</h3>
            <div className="flex gap-2">
              <Icon name="add" size="small" />
              <Icon name="edit" size="medium" />
              <Icon name="delete" size="large" />
            </div>
          </div>
        </div>
      </section>

      {/* Form Elements Section */}
      <section className="space-y-6">
        <Heading level={2}>フォーム要素</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold">TextInput</h3>
            <TextInput
              value={textInputValue}
              onChange={(e: any) => setTextInputValue(e.target.value)}
              placeholder="テキストを入力してください"
              size="medium"
            />
            <TextInput
              value=""
              onChange={() => {}}
              placeholder="エラー状態"
              isError
              size="large"
            />
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">TextArea</h3>
            <TextArea
              value={textAreaValue}
              onChange={(e: ChangeEvent<HTMLTextAreaElement> | undefined) => setTextAreaValue(e?.target.value ?? "")}
              placeholder="複数行のテキストを入力してください"
              rows={3}
            />
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Search</h3>
            <Search
              value={searchValue}
              onChange={(e: ChangeEvent<HTMLInputElement> | undefined) => setSearchValue(e?.target.value ?? "")}
              placeholder="検索..."
            />
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Select</h3>
            <Select
              selectedOption={selectedOption}
              onChange={handleSelectChange}
              placeholder="選択してください"
              size="medium"
            >
              <Select.Option option={{ id: "1", value: "option1", label: "オプション1" }} />
              <Select.Option option={{ id: "2", value: "option2", label: "オプション2" }} />
              <Select.Option option={{ id: "3", value: "option3", label: "オプション3" }} />
            </Select>
          </div>
        </div>
      </section>

      {/* Input Controls Section */}
      <section className="space-y-6">
        <Heading level={2}>入力コントロール</Heading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold">Checkbox</h3>
            <div className="space-y-2">
              <Checkbox
                isChecked={checkboxChecked}
                onChange={(e) => setCheckboxChecked(e.target.checked)}
                label="チェックボックス"
              />
              <Checkbox
                isChecked={false}
                isIndeterminate
                label="中間状態"
              />
              <Checkbox
                isChecked={false}
                isDisabled
                label="無効状態"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Radio</h3>
            <div className="space-y-2">
              <Radio
                name="radio-group"
                value="option1"
                isChecked={radioSelected === "option1"}
                onChange={(e) => setRadioSelected(e.target.value)}
                label="オプション1"
              />
              <Radio
                name="radio-group"
                value="option2"
                isChecked={radioSelected === "option2"}
                onChange={(e) => setRadioSelected(e.target.value)}
                label="オプション2"
              />
              <Radio
                name="radio-group"
                value="option3"
                isDisabled
                label="無効オプション"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Toggle</h3>
            <Toggle
              id="toggle1"
              size="medium"
              isChecked={toggleEnabled}
              onChange={() => setToggleEnabled(!toggleEnabled)}
              label="トグルスイッチ"
            />
          </div>
        </div>
      </section>

      {/* Navigation & Layout Section */}
      <section className="space-y-6">
        <Heading level={2}>ナビゲーション・レイアウト</Heading>
        
        <div className="space-y-4">
          <h3 className="font-semibold">Breadcrumb</h3>
          <Breadcrumb>
            <Breadcrumb.Item>ホーム</Breadcrumb.Item>
            <Breadcrumb.Item>カテゴリー</Breadcrumb.Item>
            <Breadcrumb.Item>現在のページ</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Tab</h3>
          <Tab>
            <Tab.Item
              id="tab1"
              isSelected={selectedTab === "tab1"}
              onClick={setSelectedTab}
            >
              タブ1
            </Tab.Item>
            <Tab.Item
              id="tab2"
              isSelected={selectedTab === "tab2"}
              onClick={setSelectedTab}
            >
              タブ2
            </Tab.Item>
            <Tab.Item
              id="tab3"
              isSelected={selectedTab === "tab3"}
              onClick={setSelectedTab}
            >
              タブ3
            </Tab.Item>
          </Tab>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Pagination</h3>
          <div className="flex gap-4">
            <Pagination
              currentPage={currentPage}
              totalPage={10}
              onClick={setPagination}
            />
            <PaginationSelect
              currentPage={currentPage}
              totalSize={100}
              sizePerPage={10}
              onClickPrevButton={() => setPagination(Math.max(1, currentPage - 1))}
              onClickNextButton={() => setPagination(currentPage + 1)}
              onChange={setPagination}
            />
          </div>
        </div>
      </section>

      {/* Feedback & Display Section */}
      <section className="space-y-6">
        <Heading level={2}>フィードバック・表示</Heading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold">Avatar</h3>
            <div className="flex gap-2">
              <Avatar firstName="太郎" lastName="山田" size="small" />
              <Avatar firstName="花子" lastName="佐藤" size="medium" />
              <Avatar firstName="次郎" lastName="田中" size="large" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Tag</h3>
            <div className="flex gap-2 flex-wrap">
              <Tag id="tag1" color="userBlue">デフォルト</Tag>
              <Tag id="tag2" color="supportSuccess">プライマリ</Tag>
              <Tag id="tag3" color="gray">セカンダリ</Tag>
              <Tag id="tag4" color="supportSuccess">成功</Tag>
              <Tag id="tag5" color="supportWarning">警告</Tag>
              <Tag id="tag6" color="supportError">エラー</Tag>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">EvaluationStar</h3>
            <EvaluationStar value={3.5} />
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Loading</h3>
            <div className="flex gap-4">
              <Loading size="small" position="static" />
              <Loading size="medium" position="static" />
              <Loading size="large" position="static" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">NotificationInline</h3>
            <div className="space-y-2">
              <NotificationInline state="information">情報メッセージ</NotificationInline>
              <NotificationInline state="success">成功メッセージ</NotificationInline>
              <NotificationInline state="warning">警告メッセージ</NotificationInline>
              <NotificationInline state="attention">エラーメッセージ</NotificationInline>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Tooltip</h3>
            <Tooltip content="これはツールチップです">
              <Button variant="outline">ホバーしてください</Button>
            </Tooltip>
          </div>
        </div>
      </section>

      {/* Interactive Section */}
      <section className="space-y-6">
        <Heading level={2}>インタラクティブ要素</Heading>
        
        <div className="flex gap-4">
          <Button variant="fill" onClick={() => setIsModalOpen(true)}>
            モーダルを開く
          </Button>
          <Button variant="outline" onClick={() => addToast({
            message: "トーストメッセージ",
            state: "information"
          })}>
            トーストを表示
          </Button>
        </div>
      </section>

      <div className="h-[300px]"></div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header>
          <Heading level={3}>モーダルサンプル</Heading>
        </Modal.Header>
        <Modal.Body>
          <div className="p-4 text-black typography-body14regular">
            <p>これはモーダルのコンテンツです。</p>
            <p>さまざまな情報を表示できます。</p>
            <p>これはモーダルのコンテンツです。</p>
            <p>さまざまな情報を表示できます。</p>
            <p>これはモーダルのコンテンツです。</p>
            <p>さまざまな情報を表示できます。</p>
            <p>これはモーダルのコンテンツです。</p>
            <p>さまざまな情報を表示できます。</p>
            <p>これはモーダルのコンテンツです。</p>
            <p>さまざまな情報を表示できます。</p>
            <p>これはモーダルのコンテンツです。</p>
            <p>さまざまな情報を表示できます。</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="flex w-full flex-wrap items-center justify-end gap-4">
            <Button variant="outline" size="large" onClick={() => {}}>
              キャンセル
            </Button>
            <Button variant="fill" size="large" onClick={() => {}}>
              保存する
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
