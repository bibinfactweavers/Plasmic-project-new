// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dGsUhjZME7GZHL9mJLmwh9
// Component: mNBL8VdJUAMV
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { NavigationBar } from "@plasmicpkgs/plasmic-nav"; // plasmic-import: jGx9tiKJoex/codeComponent
import { DataFetcher } from "@plasmicpkgs/plasmic-query"; // plasmic-import: ae7V86eNoXA/codeComponent
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_hello_world_project.module.css"; // plasmic-import: dGsUhjZME7GZHL9mJLmwh9/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: mNBL8VdJUAMV/css

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

function PlasmicHomepage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const currentUser = p.useCurrentUser?.() || {};
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <p.Stack
            as={"section"}
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            hasGap={true}
            className={classNames(projectcss.all, sty.section)}
          >
            <NavigationBar
              data-plasmic-name={"navigationBar"}
              data-plasmic-override={overrides.navigationBar}
              brand={
                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__wtxF
                  )}
                  href={"#"}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__kRB)}
                    displayHeight={"40px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    src={(() => {
                      try {
                        return undefined;
                      } catch (e) {
                        if (e instanceof TypeError) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()}
                  />
                </a>
              }
              className={classNames("__wab_instance", sty.navigationBar)}
              closeButton={
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img___6YvtO)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  src={"https://static1.plasmic.app/close.svg"}
                />
              }
              itemsGap={8}
              menuItems={
                <React.Fragment>
                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__cKLb9
                    )}
                    href={`/Homepage`}
                  >
                    {"Home"}
                  </a>

                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__ayfOd
                    )}
                    href={"/"}
                  >
                    {"About"}
                  </a>

                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link___2HN7N
                    )}
                    href={"/"}
                  >
                    {"Contact"}
                  </a>
                </React.Fragment>
              }
              openButton={
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__fasw4)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  src={"https://static1.plasmic.app/menu.svg"}
                />
              }
              responsiveBreakpoint={768}
            />

            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1
              )}
            >
              {"Welcome to your first page."}
            </h1>

            <div className={classNames(projectcss.all, sty.freeBox__d7035)}>
              <DataFetcher
                data-plasmic-name={"httpApiFetcher"}
                data-plasmic-override={overrides.httpApiFetcher}
                className={classNames("__wab_instance", sty.httpApiFetcher)}
                dataName={"fetchedData"}
                errorDisplay={
                  <ph.DataCtxReader>
                    {$ctx => "Error fetching data"}
                  </ph.DataCtxReader>
                }
                headers={{
                  "Content-Type": "application/json",
                  Accept: "application/json"
                }}
                loadingDisplay={
                  <ph.DataCtxReader>{$ctx => "Loading..."}</ph.DataCtxReader>
                }
                method={"GET"}
                noLayout={false}
                url={"https://dummyjson.com/products"}
              >
                <ph.DataCtxReader>
                  {$ctx =>
                    (() => {
                      try {
                        return $ctx.fetchedData.products;
                      } catch (e) {
                        if (e instanceof TypeError) {
                          return [];
                        }
                        throw e;
                      }
                    })().map((currentItem, currentIndex) => (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__n6Nkc
                        )}
                        key={currentIndex}
                      >
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img___7UfKm)}
                          displayHeight={"auto"}
                          displayMaxHeight={"none"}
                          displayMaxWidth={"100%"}
                          displayMinHeight={"0"}
                          displayMinWidth={"0"}
                          displayWidth={"auto"}
                          loading={"lazy"}
                          src={(() => {
                            try {
                              return currentItem.thumbnail;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return undefined;
                              }
                              throw e;
                            }
                          })()}
                        />

                        <a
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            projectcss.__wab_text,
                            sty.link___7J5EK
                          )}
                          href={`/about-page/${(() => {
                            try {
                              return currentItem.id;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return undefined;
                              }
                              throw e;
                            }
                          })()}`}
                        >
                          {(() => {
                            try {
                              return currentItem.title;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return "Enter some text";
                              }
                              throw e;
                            }
                          })()}
                        </a>
                      </div>
                    ))
                  }
                </ph.DataCtxReader>
              </DataFetcher>
            </div>
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "section", "navigationBar", "h1", "httpApiFetcher"],
  section: ["section", "navigationBar", "h1", "httpApiFetcher"],
  navigationBar: ["navigationBar"],
  h1: ["h1"],
  httpApiFetcher: ["httpApiFetcher"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    navigationBar: makeNodeComponent("navigationBar"),
    h1: makeNodeComponent("h1"),
    httpApiFetcher: makeNodeComponent("httpApiFetcher"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
